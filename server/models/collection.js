const collectionDefinition = (sequelize, DataTypes) => {
  const collection = sequelize.define('Collection', {
    name: { type: DataTypes.STRING },
    sortId: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  collection.associate = (models) => {
    collection.hasMany(models.Task, {
      foreignKey: 'collectionId',
      as: 'tasks',
      onDelete: 'CASCADE',
    });
    collection.belongsToMany(models.User, {
      through: 'UserCollections',
      as: 'employees',
      foreignKey: 'collectionId',
      otherKey: 'userId'
    });
    collection.belongsTo(models.Sort, {
      foreignKey: 'sortId',
      as: 'sort',
      onDelete: 'CASCADE',
    });
  };
  return collection;
};

export default collectionDefinition;
