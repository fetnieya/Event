const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    IdU: { type: String, unique: true },
    username: String,
    firstName: String,
    lastName: String,
    Email: { type: String, unique: true },
    password: String,
    isAdmin: Boolean,
    role: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;