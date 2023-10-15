const mongoose = require('mongoose');
const trips = mongoose.model('trips');

const fetchTrips = async (req, res) => {

    try {

        if (!!req.params.tripCode) {

            const result = await trips.findOne({ 'code': req.params.tripCode });
            if (!!result) {

                res.json(result);

            } else {

                res.status(404).send('No trip found for code $(req.params.tripCode}');

            }

            return;

        }
        res.json(await trips.find({}));

    } catch (e) {

        res.status(500).json(e);

    }

};

module.exports = {

    fetchTrips

};