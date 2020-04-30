const sectorDefinition = (sequelize, DataTypes) => {
  const sector = sequelize.define('sector', {
    provinceId: { type: DataTypes.INTEGER },
    districtId: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  sector.associate = (models) => {
    sector.belongsTo(models.province, {
      foreignKey: 'provinceId',
      as: 'province',
      onDelete: 'CASCADE',
    });
    sector.belongsTo(models.district, {
      foreignKey: 'districtId',
      as: 'district',
      onDelete: 'CASCADE',
    });
    sector.hasMany(models.user, {
      foreignKey: 'sectorId',
      as: 'users',
      onDelete: 'CASCADE',
    });
  };
  return sector;
};

export default sectorDefinition;
