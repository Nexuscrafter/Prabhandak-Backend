const {InfluencerService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {error, log} = require('winston');

async function createInfluencer(req, res){
    try{
        const response = await InfluencerService.createInfluencer(req.body);
        res.status(StatusCodes.CREATED).json(response);
    }catch(err){
        error(err.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Internal server error'});
    }
}

module.exports = {
    createInfluencer,
}