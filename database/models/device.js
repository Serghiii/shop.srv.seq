'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  device.init({
    code: DataTypes.NUMBER,
    name: DataTypes.STRING,
    count: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
    priceold: DataTypes.NUMBER,
    img: DataTypes.STRING,
    categoryid: DataTypes.NUMBER,
    brandid: DataTypes.NUMBER,
    typeid: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'device',
  });
  return device;
};