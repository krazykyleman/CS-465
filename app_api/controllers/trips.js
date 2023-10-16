const mongoose = require('mongoose');
const trips = mongoose.model('trips');

const fetchTrips = async (req, res) => {

    if (!!req.params.tripCode) {

        try {

            res.json(await trips.findOne({ 'code': req.params.tripCode }));

        } catch (e) {

            res.status(404).send('No trip found for code ${req.params.tripCode}');

        }

        return;

    }

    res.json(await trips.find({}));
};

const addTrip = async (req, res) => {

    const newTrip = req.body;

    if(!newTrip) {

        // 400 BAD REQUEST error because no Trip was sent
        res.status(400).send('No trip record found in body of request');

        return;

    }

    try {

        const savedTrip = await trips.create(newTrip);

        //201 CREATED response with the trip -- we send it back because it'll have the MongoDB _id now
        res.status(201).json(savedTrip);

    } catch(e) {

        //400 BAD REQUEST because we failed to create the trip
        res.status(400).json(e);

    }

};

module.exports = {

    fetchTrips,
    addTrip

};