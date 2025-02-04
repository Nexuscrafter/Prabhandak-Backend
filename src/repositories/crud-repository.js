const { where } = require('sequelize');
const {Logger} = require('../config');
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        console.log("inside repository");
        try{
            const response = await this.model.create(data);
            return response;
        }catch(error){
            Logger.error('Something went wrong in the Crud Repo : Create');
            throw error;
        }
         
    }

    async destroy(data) {
        try{
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        }catch(error){
            Logger.error('Something went wrong in the Crud Repo : Destroy');
            throw error;
        }
         
    }

    async get(data) {
        try{
            const response = await this.model.findByPk(data);
            return response;
        }catch(error){
            Logger.error('Something went wrong in the Crud Repo : get');
            throw error;
        }
         
    }

    async getAll() {
        try{
            const response = await this.model.findAll();
            return response;
        }catch(error){
            Logger.error('Something went wrong in the Crud Repo : get');
            throw error;
        }
         
    }

    async update(id, data) {  //data is the object that needs to be updated {column: value,..}
        try{
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        }catch(error){
            Logger.error('Something went wrong in the Crud Repo : update');
            throw error;
        }
         
    }

    async getByEmail(email) {
        try{
            const response = await this.model.findOne({
                where: {
                    email: email
                }
            });
            return response;
        }catch(error){
            Logger.error('Something went wrong in the Crud Repo : getByEmail');
            throw error;
        }
         
    }


}

module.exports = CrudRepository;