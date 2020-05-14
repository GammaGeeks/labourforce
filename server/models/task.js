const taskDefinition = (sequelize, DataTypes) => {
  const task = sequelize.define('Task', {
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    provinceId: { type: DataTypes.INTEGER },
    districtId: { type: DataTypes.INTEGER },
    sectorId: { type: DataTypes.INTEGER },
    collectionId: { type: DataTypes.INTEGER },
    userId: { type: DataTypes.INTEGER },
    salary: { type: DataTypes.STRING },
    startsAt: { type: DataTypes.DATE },
    endsAt: { type: DataTypes.DATE },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  task.associate = (models) => {
    task.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
    task.belongsTo(models.Province, {
      foreignKey: 'provinceId',
      as: 'province',
      onDelete: 'CASCADE',
    });
    task.belongsTo(models.District, {
      foreignKey: 'districtId',
      as: 'district',
      onDelete: 'CASCADE',
    });
    task.belongsTo(models.Sector, {
      foreignKey: 'sectorId',
      as: 'sector',
      onDelete: 'CASCADE',
    });
    task.belongsTo(models.Collection, {
      foreignKey: 'collectionId',
      as: 'collection',
      onDelete: 'CASCADE',
    });
    task.belongsToMany(models.User, {
      through: 'UserTasks',
      as: 'employees',
      foreignKey: 'taskId',
      otherKey: 'userId'
    });
  };

  return task;
};

export default taskDefinition;
