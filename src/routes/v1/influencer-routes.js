const express = require('express');

const {InfleuncerController} = require('../../controllers');

const router = express.Router();

// POST /api/v1/influencers/create POST
router.post('/create', InfleuncerController.createInfluencer);

module.exports = router;