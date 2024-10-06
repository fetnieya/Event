const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    date: { type: Date },
    place: { type: String },
    price: { type: Number }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;