const provinceDefinition = (sequelize, DataTypes) => {
  const province = sequelize.define('province', {
    name: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  province.associate = (models) => {
    province.hasMany(models.district, {
      foreignKey: 'provinceId',
      as: 'districts',
      onDelete: 'CASCADE',
    });
    province.hasMany(models.sector, {
      foreignKey: 'provinceId',
      as: 'sectors',
      onDelete: 'CASCADE',
    });
    province.hasMany(models.user, {
      foreignKey: 'provinceId',
      as: 'users',
      onDelete: 'CASCADE',
    });
  };
  return province;
};

export default provinceDefinition;
