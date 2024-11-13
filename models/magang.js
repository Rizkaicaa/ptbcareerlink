// models/Magang.js
module.exports = (sequelize, DataTypes) => {
  const Magang = sequelize.define('Magang', {
      id_magang: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      id_pengguna: {
          type: DataTypes.INTEGER,
          references: {
              model: 'Pengguna',
              key: 'id_pengguna'
          }
      },
      tanggal_posting: DataTypes.DATE,
      perusahaan: DataTypes.STRING,
      judul_magang: DataTypes.STRING,
      alamat: DataTypes.STRING,
      posisi_magang: DataTypes.STRING,
      kualifikasi: DataTypes.STRING,
      jenis_magang: DataTypes.STRING,
      deskripsi_magang: DataTypes.STRING,
      kontak: DataTypes.STRING,
      gambar_magang: DataTypes.STRING
  }, {
      tableName: 'Magang',
      timestamps: false
  });

  Magang.associate = models => {
      Magang.belongsTo(models.Pengguna, { foreignKey: 'id_pengguna' });
  };

  return Magang;
};
