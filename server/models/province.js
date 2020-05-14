const provinceDefinition = (sequelize, DataTypes) => {
  const province = sequelize.define('Province', {
    name: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  province.associate = (models) => {
    province.hasMany(models.District, {
      foreignKey: 'provinceId',
      as: 'districts',
      onDelete: 'CASCADE',
    });
    province.hasMany(models.Sector, {
      foreignKey: 'provinceId',
      as: 'sectors',
      onDelete: 'CASCADE',
    });
    province.hasMany(models.User, {
      foreignKey: 'provinceId',
      as: 'users',
      onDelete: 'CASCADE',
    });
    province.hasMany(models.Task, {
      foreignKey: 'provinceId',
      as: 'tasks',
      onDelete: 'CASCADE',
    });
  };
  return province;
};

export default provinceDefinition;
