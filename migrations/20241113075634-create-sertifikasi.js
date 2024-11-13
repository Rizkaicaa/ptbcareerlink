'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sertifikasis', {
      id_sertifikasi: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_pengguna: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pengguna', // Nama tabel yang dirujuk
          key: 'id_pengguna'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      tanggal_posting: {
        type: Sequelize.DATE
      },
      instansi: {
        type: Sequelize.STRING
      },
      judul_sertifikasi: {
        type: Sequelize.STRING
      },
      materi: {
        type: Sequelize.STRING
      },
      tanggal_pelaksanaan: {
        type: Sequelize.DATE
      },
      benefit: {
        type: Sequelize.STRING
      },
      gambar_sertifikasi: {
        type: Sequelize.STRING
      },
      kontak: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Sertifikasis');
  }
};