const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const seed = async function() {
    // Seed TRIPS
    const trips = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8'));
    const trip = mongoose.model('trips');
    await trip.deleteMany();
    await trip.insertMany(trips);
}

module.exports = { seed };