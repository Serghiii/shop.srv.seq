'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user)
    }
  };
  profile.init({
    name: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    avatar: DataTypes.STRING,
    userid: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'profile',
  });
  return profile;
};