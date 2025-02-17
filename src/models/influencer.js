'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Influencer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Influencer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.STRING
    },
    youtube: {
      type: DataTypes.STRING
    },
    instagram: {
      type: DataTypes.STRING
    },
    facebook: {
      type: DataTypes.STRING
    },
    twitter: {
      type: DataTypes.STRING
    },
    other: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Influencer'
  });
  
  return Influencer;
};