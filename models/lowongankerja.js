// models/Sertifikasi.js
module.exports = (sequelize, DataTypes) => {
  const Sertifikasi = sequelize.define(
    "Sertifikasi",
    {
      id_sertifikasi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_pengguna: {
        type: DataTypes.INTEGER,
        references: {
          model: "Pengguna",
          key: "id_pengguna",
        },
      },
      tanggal_posting: DataTypes.DATE,
      instansi: DataTypes.STRING,
      judul_sertifikasi: DataTypes.STRING,
      materi: DataTypes.STRING,
      tanggal_pelaksanaan: DataTypes.DATE,
      benefit: DataTypes.STRING,
      gambar_sertifikasi: DataTypes.STRING,
      kontak: DataTypes.STRING,
      harga: DataTypes.FLOAT,
    },
    {
      tableName: "Sertifikasi",
      timestamps: false,
    }
  );

  Sertifikasi.associate = (models) => {
    Sertifikasi.belongsTo(models.Pengguna, { foreignKey: "id_pengguna" });
  };

  return Sertifikasi;
};
