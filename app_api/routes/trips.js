const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');

router.get('/:tridCode?', controller.fetchTrips);
router.post('/', controller.addTrip);
router.put('/:tripCode', controller.updateTrip);

module.exports = router;