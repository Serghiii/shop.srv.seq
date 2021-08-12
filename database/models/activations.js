'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  activations.init({
    uuid: DataTypes.STRING,
    userid: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'activations',
  });
  return activations;
};