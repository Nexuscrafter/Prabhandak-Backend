const CrudRepository = require('./crud-repository');
const {Influencer} = require('../models');

class InfluencerRepository extends CrudRepository {
    constructor(){
        super(Influencer);
    }
}
module.exports = InfluencerRepository;