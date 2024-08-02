const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    ID: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    place: { type: String, required: true },
    price: { type: Number, required: true }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;