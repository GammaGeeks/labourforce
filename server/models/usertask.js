const modelDefinition = (sequelize, DataTypes) => {
  const model = sequelize.define('UserTask', {
    userId: { type: DataTypes.INTEGER },
    taskId: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});
  return model;
};

export default modelDefinition;
