// migrations/20230101000000-create-pengguna.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pengguna', {
      id_pengguna: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nama_lengkap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nama_pengguna: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pengguna');
  }
};
