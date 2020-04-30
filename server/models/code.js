const codeDefinition = (sequelize, DataTypes) => {
  const code = sequelize.define('code', {
    userId: { type: DataTypes.INTEGER },
    value: { type: DataTypes.STRING },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  code.associate = (models) => {
    code.belongsTo(models.user, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };
  return code;
};

export default codeDefinition;
