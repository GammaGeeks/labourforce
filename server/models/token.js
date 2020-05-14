const tokenDefinition = (sequelize, DataTypes) => {
  const token = sequelize.define('Token', {
    value: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  token.associate = (models) => {
    token.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };

  return token;
};

export default tokenDefinition;
