'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      { name: 'USER', description: 'Користувач', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ADMIN', description: 'Адміністратор', createdAt: new Date(), updatedAt: new Date() }
    ])
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
