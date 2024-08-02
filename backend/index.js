const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();
const cors = require('cors');

const User = require('./models/user'); // Ensure this is declared only once and at the top
const Event = require('./models/event');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
    secret: 'your-secret-key', // Replace with your secret key
    resave: false,
    saveUninitialized: true,
}));

// Flash middleware
app.use(flash());

// Database connection
mongoose.connect('mongodb://localhost:27017/event')
    .then(() => console.log('db connected!'))
    .catch((error) => {
        console.error('connection error:', error);
    });

// Sign-in Route (GET)
app.get('/auth/signin', (req, res) => {
    console.log('GET /auth/signin');
    res.json({ message: req.flash('message') });
});

// Sign-in Route (POST)
app.post('/auth/signin', async(req, res) => {
    const { Email, password } = req.body;
    console.log("here the signin api!!!!");

    try {
        // Verify if the user exists in the database
        const foundUser = await User.findOne({ Email });
        console.log({ foundUser });
        if (!foundUser) {
            req.flash('message', 'Email incorrect.');
            return res.redirect('/auth/signin');
        }

        // Verify if the password is correct by comparing with bcrypt
        const passwordMatch = await bcrypt.compare(password, foundUser.password);
        if (!passwordMatch) {
            req.flash('message', 'Mot de passe incorrect.');
            return res.redirect('/auth/signin');
        }
        console.log('ok');

        // Check if the user is an administrator
        if (foundUser.isAdmin) {
            console.log('admin');
            // Redirect to the admin home page
            return res.redirect('/');
        } else {
            console.log('user');
            // Redirect to the non-admin home page
            return res.redirect('/profile');
        }
    } catch (error) {
        console.error(error);
        req.flash('message', 'Erreur lors de la connexion.');
        res.redirect('/auth/signin');
    }
});

// Sign-up Route (GET)
app.get('/auth/signup', (req, res) => {
    console.log('GET /auth/signup');
    res.json({ message: req.flash('message') });
});

// Sign-up Route (POST)
app.post('/auth/signup', async(req, res) => {
    const { Email, password, firstName, lastName } = req.body;
    console.log('Request Body:', req.body);

    try {
        if (!Email || !password || !firstName || !lastName) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user with the provided email already exists
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: 'Utilisateur existe déjà !' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ Email, password: hashedPassword, firstName, lastName });
        await newUser.save();

        // Generate JWT token for the newly registered user
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }
        const token = jwt.sign({ userId: newUser._id.toString(), firstName, lastName }, process.env.JWT_SECRET, { expiresIn: '8h' });

        res.json({ token });
    } catch (error) {
        console.error('Error while signing up:', error.message);
        console.error('Error stack:', error.stack);
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: 'Validation error', details: error.errors });
        } else if (error.code === 11000) {
            res.status(400).json({ message: 'Duplicate key error', details: error.message });
        } else {
            res.status(500).json({ message: 'Internal server error', details: error.message });
        }
    }
});

// Events
app.get('/eventList', async(req, res) => {
    try {
        const events = await Event.find();
        console.log({ events });
        res.status(200).json({ data: events });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Events (POST)
app.post('/eventList', (req, res) => {
    const event = new Event({
        ID: req.body.ID,
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        place: req.body.place,
        price: req.body.price,
    });

    event.save()
        .then((response) => res.status(201).send(response))
        .catch((err) => res.status(400).send(err));
});

// Update an event
app.put('/eventUpdate/:id', (req, res) => {
    const eventId = req.params.id;
    const updatedEvent = {
        ID: req.body.ID,
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        place: req.body.place,
        price: req.body.price,
    };

    Event.findByIdAndUpdate(eventId, updatedEvent, { new: true })
        .then((response) => {
            if (!response) {
                return res.status(404).send({ message: 'Event not found' });
            }
            res.send(response);
        })
        .catch((err) => res.status(400).send(err));
});


// Delete an event
app.delete('/eventList/:id', (req, res) => {
    const eventId = req.params.id;

    Event.findByIdAndDelete(eventId)
        .then((response) => {
            if (!response) {
                return res.status(404).send({ message: 'Event not found' });
            }
            res.status(200).send({ message: 'Event deleted successfully' });
        })
        .catch((err) => res.status(400).send(err));
});

// ADD USER
app.post('/addUser', async(req, res) => {
    try {
        const { IdU, username, firstName, lastName, Email, password, isAdmin, role } = req.body;

        // Validate required fields
        if (!Email) {
            return res.status(400).send({ error: 'Email is required' });
        }

        // Create a new user instance
        const user = new User({
            IdU,
            username,
            firstName,
            lastName,
            Email,
            password,
            isAdmin: isAdmin || false, // Default to false if not provided
            role
        });

        // Check if email or ID already exists
        const existingUser = await User.findOne({ $or: [{ Email }, { IdU }] });
        if (existingUser) {
            return res.status(400).json({ error: 'Email or ID already exists' });
        }

        // Save the user to the database
        const savedUser = await user.save();
        res.status(201).send(savedUser);
    } catch (err) {
        // Handle duplicate key error
        if (err.code === 11000) {
            res.status(400).send({ error: 'Email or ID already exists' });
        } else {
            res.status(400).send({ error: err.message });
        }
    }
});
//update user 
app.post('/user_Update/:id', (req, res) => {
    users
        .updateOne({ IdU: req.params.IdU }, {
            nom: req.body.nom,
            prenom: req.body.prenom,
            direction: req.body.direction,
            observation: req.body.observation
        })
        .then((response) => res.send('updated'))
        .catch((error) => res.send(error));
});

//Delete user
app.delete('/userList/:id', async(req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the user
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).send({ error: 'User not found' });
        }

        res.send({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});


// Profile route
app.get('/profile', (req, res) => {
    res.send('Profile page');
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running`);
});