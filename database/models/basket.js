'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  basket.init({
    count: DataTypes.NUMBER,
    userid: DataTypes.NUMBER,
    deviceid: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'basket',
  });
  return basket;
};