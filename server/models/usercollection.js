const modelDefinition = (sequelize, DataTypes) => {
  const model = sequelize.define('UserCollection', {
    userId: { type: DataTypes.INTEGER },
    collectionId: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});
  return model;
};

export default modelDefinition;
