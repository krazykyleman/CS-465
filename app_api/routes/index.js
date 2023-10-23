const express = require('express');
const router = express.Router();
const tripsRouter = require('./trips');
const authRouter = require('./authentication');

router.use('/trips', tripsRouter);
router.use('/auth', authRouter)

module.exports = router;