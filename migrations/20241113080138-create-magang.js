'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Magangs', {
      id_magang: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_pengguna: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pengguna',
          key: 'id_pengguna'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      tanggal_posting: {
        type: Sequelize.DATE
      },
      perusahaan: {
        type: Sequelize.STRING
      },
      judul_magang: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      posisi_magang: {
        type: Sequelize.STRING
      },
      kualifikasi: {
        type: Sequelize.STRING
      },
      jenis_magang: {
        type: Sequelize.STRING
      },
      durasi_magang: {
        type: Sequelize.STRING
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      kontak: {
        type: Sequelize.STRING
      },
      gambar_magang: {
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Magangs');
  }
};