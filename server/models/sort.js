const sortDefinition = (sequelize, DataTypes) => {
  const sort = sequelize.define('Sort', {
    name: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  sort.associate = (models) => {
    sort.hasMany(models.Collection, {
      foreignKey: 'sortId',
      as: 'collections',
      onDelete: 'CASCADE',
    });
  };
  return sort;
};

export default sortDefinition;
