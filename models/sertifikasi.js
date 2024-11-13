module.exports = (sequelize, DataTypes) => {
  const Sertifikasi = sequelize.define('Sertifikasi', {
    id_sertifikasi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_pengguna: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pengguna', // Nama tabel pengguna yang menjadi referensi
        key: 'id_pengguna'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    tanggal_posting: DataTypes.DATE,
    instansi: DataTypes.STRING,
    judul_sertifikasi: DataTypes.STRING,
    materi: DataTypes.STRING,
    tanggal_pelaksanaan: DataTypes.DATE,
    benefit: DataTypes.STRING,
    gambar_sertifikasi: DataTypes.STRING,
    kontak: DataTypes.STRING,
    harga: DataTypes.FLOAT
  }, {});
  return Sertifikasi;
};
