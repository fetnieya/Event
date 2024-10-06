const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    lastName: { type: String, },
    firstName: { type: String, },
    email: { type: String, },
    password: String,
    isAdmin: Boolean,
    role: { type: String, }
});

const User = mongoose.model('User', userSchema);

module.exports = User;