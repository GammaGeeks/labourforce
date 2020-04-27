const districtDefinition = (sequelize, DataTypes) => {
  const district = sequelize.define('district', {
    provinceId: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  district.associate = (models) => {
    district.belongsTo(models.province, {
      foreignKey: 'provinceId',
      as: 'province',
      onDelete: 'CASCADE',
    });
    district.hasMany(models.sector, {
      foreignKey: 'districtId',
      as: 'sectors',
      onDelete: 'CASCADE',
    });
    district.hasMany(models.user, {
      foreignKey: 'districtId',
      as: 'users',
      onDelete: 'CASCADE',
    });
  };
  return district;
};

export default districtDefinition;
