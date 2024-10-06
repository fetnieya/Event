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
    const { email, password } = req.body;
    console.log("here the signin api!!!!");

    try {
        // Verify if the user exists in the database
        const foundUser = await User.findOne({ email });
        console.log({ foundUser });

        if (!foundUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Verify if the password is correct by comparing with bcrypt
        const passwordMatch = await bcrypt.compare(password, foundUser.password);
        if (!passwordMatch) {
            return res.status(401).send({ message: 'Invalid password' });
        }

        console.log('ok');

        // Generate JWT token
        const token = jwt.sign({ id: foundUser._id, role: foundUser.role }, process.env.JWT_SECRET, { expiresIn: '8h' });

        // Respond with the user object and token
        res.status(200).send({ token, foundUser });
    } catch (error) {
        console.error(error);
        req.flash('message', 'Error during login.');
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
    const { email, password, firstName, lastName, role } = req.body;
    console.log('Request Body:', req.body);
    console.log('Request Body:', process.env.jwt_secret);

    try {
        /*
        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ message: 'All fields are required' });
        }*/

        // Check if user with the provided email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Utilisateur existe déjà !' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ email, password: hashedPassword, firstName, lastName, role });
        await newUser.save();

        // Generate JWT token for the newly registered user
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }
        const token = jwt.sign({ userId: newUser._id.toString(), firstName, lastName }, process.env.JWT_SECRET, { expiresIn: '8h' });

        res.status(201).json({ userId: newUser._id.toString(), firstName, lastName, role });
    } catch (error) {
        console.error('Error while signing up:', error.message);
        console.error('Error stack:', error.stack);
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: 'Validation error', details: error.errors });
        } else if (error.code === 11000) {
            res.status(400).json({ message: 'Duplicate key error', details: error.message });
        } else {
            res.status(500).json({ message: 'Internal server error', details: error });
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
app.get('/eventList/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const events = await Event.findById(id);
        console.log({ events });
        res.status(200).json({ data: events });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Events (POST)
app.post('/eventList', (req, res) => {
    console.log('====================================');
    console.log({ aa: req.body });
    console.log('====================================');
    const event = new Event({
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
app.put('/eventList/:id', (req, res) => {
    const eventId = req.params.id;
    const updatedEvent = {
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        place: req.body.place,
        price: req.body.price,
    };

    Event.updateOne({ _id: eventId }, updatedEvent)
        .then((response) => {
            if (response.nModified === 0) {
                return res.status(404).send({ message: 'Event not found' });
            }
            res.send('Event updated successfully');
        })
        .catch((err) => res.status(400).send(err));
});



// Delete an event
app.delete('/deleteEvent/:id', async(req, res) => {
    const { id } = req.params;

    console.log('Attempting to delete event with ID:', id); // Log the ID being used

    try {
        const result = await Event.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event:', error); // Detailed error logging
        res.status(500).json({ message: 'Server error' });
    }
});






//GET users
app.get('/userList', async(req, res) => {
    try {
        const users = await User.find();
        console.log({ users });
        res.status(200).json({ data: users });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/userList/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const users = await User.findById(id);
        console.log({ users });
        res.status(200).json({ data: users });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// ADD USER
app.post('/addUser', async(req, res) => {
    try {
        const { username, firstName, lastName, Email, role } = req.body;
        // Create a new user instance
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            // Default to false if not provided
            role: req.body.role
        });



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
app.put('/userList/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: req.body.role
    };

    User.updateOne({ _id: userId }, updatedUser)
        .then((response) => {
            if (response.nModified === 0) {
                return res.status(404).send({ message: 'User not found' });
            }
            res.send('user updated successfully');
        })
        .catch((err) => res.status(400).send(err));
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
app.listen(8080, () => {
    console.log(`Server is running`);
});