const sectorDefinition = (sequelize, DataTypes) => {
  const sector = sequelize.define('Sector', {
    provinceId: { type: DataTypes.INTEGER },
    districtId: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  sector.associate = (models) => {
    sector.belongsTo(models.Province, {
      foreignKey: 'provinceId',
      as: 'province',
      onDelete: 'CASCADE',
    });
    sector.belongsTo(models.District, {
      foreignKey: 'districtId',
      as: 'district',
      onDelete: 'CASCADE',
    });
    sector.hasMany(models.User, {
      foreignKey: 'sectorId',
      as: 'users',
      onDelete: 'CASCADE',
    });
    sector.hasMany(models.Task, {
      foreignKey: 'sectorId',
      as: 'tasks',
      onDelete: 'CASCADE',
    });
  };
  return sector;
};

export default sectorDefinition;
