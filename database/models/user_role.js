'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.user)
      this.belongsToMany(models.role)
    }
  };
  user_role.init({
    id: DataTypes.BIGINT,
    userid: DataTypes.BIGINT,
    roleid: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'user_role',
  });
  return user_role;
};