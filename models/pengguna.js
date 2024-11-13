// models/Pengguna.js
module.exports = (sequelize, DataTypes) => {
  const Pengguna = sequelize.define('Pengguna', {
      id_pengguna: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      nama_lengkap: DataTypes.STRING,
      nama_pengguna: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
  }, {
      tableName: 'Pengguna',
      timestamps: false
  });

  Pengguna.associate = models => {
      Pengguna.hasMany(models.LowonganKerja, { foreignKey: 'id_pengguna' });
      Pengguna.hasMany(models.Sertifikasi, { foreignKey: 'id_pengguna' });
      Pengguna.hasMany(models.Magang, { foreignKey: 'id_pengguna' });
  };

  return Pengguna;
};
