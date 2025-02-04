const express = require('express');

const { InfoController } = require('../../controllers');

const influencerRoutes = require('./influencer-routes');

const router = express.Router();


router.get('/info', InfoController.info); 

router.use('/influencers', influencerRoutes);

module.exports = router;