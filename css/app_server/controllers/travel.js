var fs = require('fs');

var trips;

try {
    trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
} catch (error) {
    console.error("Error reading trips.json:", error);
    trips = []; // default to an empty array if there's an error
}

//Get Travel view
const travel = (req, res) => {

    res.render('travel', { title: 'Travlr Getaways', trips});

};

module.exports = {

    travel

};