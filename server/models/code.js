const codeDefinition = (sequelize, DataTypes) => {
  const code = sequelize.define('Code', {
    userId: { type: DataTypes.INTEGER },
    value: { type: DataTypes.STRING },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  code.associate = (models) => {
    code.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };
  return code;
};

export default codeDefinition;
