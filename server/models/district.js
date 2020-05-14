const districtDefinition = (sequelize, DataTypes) => {
  const district = sequelize.define('District', {
    provinceId: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  district.associate = (models) => {
    district.belongsTo(models.Province, {
      foreignKey: 'provinceId',
      as: 'province',
      onDelete: 'CASCADE',
    });
    district.hasMany(models.Sector, {
      foreignKey: 'districtId',
      as: 'sectors',
      onDelete: 'CASCADE',
    });
    district.hasMany(models.User, {
      foreignKey: 'districtId',
      as: 'users',
      onDelete: 'CASCADE',
    });
    district.hasMany(models.Task, {
      foreignKey: 'districtId',
      as: 'tasks',
      onDelete: 'CASCADE',
    });
  };
  return district;
};

export default districtDefinition;
