const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');

router.get('/:tridCode?', controller.fetchTrips);

module.exports = router;