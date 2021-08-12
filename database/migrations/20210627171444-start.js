'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      phone: {
        type: Sequelize.STRING(13), unique: true, allowNull: false
      },
      email: {
        type: Sequelize.STRING(50), unique: true, allowNull: false
      },
      password: {
        type: Sequelize.STRING, allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING(20), unique: true, allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('user_role', {
      id: {
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      userid: {
        type: Sequelize.BIGINT, references: { model: 'users', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      },
      roleid: {
        type: Sequelize.BIGINT, references: { model: 'roles', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      }
    }).then(() => queryInterface.addIndex('user_role', ['userid', 'roleid']));

    await queryInterface.createTable('profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING, allowNull: false
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      avatar: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.BIGINT, references: { model: 'users', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      }
    });

    await queryInterface.createTable('activations', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userid: {
        type: Sequelize.BIGINT, references: { model: 'users', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      },
      createdAt: {
        type: Sequelize.DATE, allowNull: false
      }
    });

    await queryInterface.createTable('bans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      reason: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.BIGINT, references: { model: 'users', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING, unique: true, allowNull: false
      }
    });

    await queryInterface.createTable('brands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING, unique: true, allowNull: false
      }
    });

    await queryInterface.createTable('types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING, unique: true, allowNull: false
      }
    });

    await queryInterface.createTable('devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      code: {
        type: Sequelize.BIGINT, unique: true, allowNull: false
      },
      name: {
        type: Sequelize.STRING, allowNull: false
      },
      count: {
        type: Sequelize.INTEGER(11), allowNull: false
      },
      price: {
        type: Sequelize.INTEGER(11), allowNull: false
      },
      priceold: {
        type: Sequelize.INTEGER(11)
      },
      img: {
        type: Sequelize.STRING
      },
      categoryid: {
        type: Sequelize.BIGINT, references: { model: 'categories', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      },
      brandid: {
        type: Sequelize.BIGINT, references: { model: 'brands', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      },
      typeid: {
        type: Sequelize.BIGINT, references: { model: 'types', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('props', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING, allowNull: false
      },
      value: {
        type: Sequelize.STRING, allowNull: false
      },
      typeid: {
        type: Sequelize.BIGINT, references: { model: 'types', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      }
    });

    await queryInterface.createTable('baskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      count: {
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.BIGINT, references: { model: 'users', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      },
      deviceid: {
        type: Sequelize.BIGINT, references: { model: 'devices', key: 'id' }, onDelete: 'cascade', onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('profiles');
    await queryInterface.dropTable('activations');
    await queryInterface.dropTable('bans');
    await queryInterface.dropTable('user_role');
    await queryInterface.dropTable('baskets');
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('roles');
    await queryInterface.dropTable('devices');
    await queryInterface.dropTable('categories');
    await queryInterface.dropTable('brands');
    await queryInterface.dropTable('props');
    await queryInterface.dropTable('types');
  }
};