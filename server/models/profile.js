'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
    }
  }
  Profile.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    about: DataTypes.TEXT,
    bio: DataTypes.TEXT,
    location: DataTypes.STRING,
    followerCount: DataTypes.INTEGER,
    connectionCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};