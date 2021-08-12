'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  prop.init({
    name: DataTypes.STRING,
    value: DataTypes.STRING,
    typeid: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'prop',
  });
  return prop;
};