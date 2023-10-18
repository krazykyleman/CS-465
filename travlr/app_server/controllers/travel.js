const mongoose = require('mongoose');
const trips = mongoose.model('trips');

const travel = async (req, res) => {
    res.render('travel', {title: 'Travlr Getaways', trips: await trips.find({}), travelSelected: req.path == '/travel'});
};

module.exports = {
    travel
};