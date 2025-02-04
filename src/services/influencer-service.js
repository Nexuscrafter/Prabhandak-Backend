const {InfluencerRepository} = require('../repositories');

const influencerRepository = new InfluencerRepository();

async function createInfluencer(influencer){
    try{
        const response = await influencerRepository.getByEmail(influencer.email);
        if(response){
            await influencerRepository.update(response.id, influencer);
            return { message: 'Influencer UPDATED Successfully for email: ' + influencer.email};
        }else{
            await influencerRepository.create(influencer);
            return { message: 'Influencer Created Successfully'};
        }
    }catch(error){
        throw error;
    }
}

module.exports = {
    createInfluencer,
}
