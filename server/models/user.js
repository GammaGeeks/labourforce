const userDefinition = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fullname: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    profileImg: { type: DataTypes.STRING },
    coverImg: { type: DataTypes.STRING },
    locationIds: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
    phoneNumber: { type: DataTypes.STRING },
    nationalId: { type: DataTypes.STRING },
    passportId: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    isVerified: { type: DataTypes.BOOLEAN },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  user.associate = (models) => {
    user.hasOne(models.token, {
      foreignKey: 'userId',
      as: 'token',
      onDelete: 'CASCADE',
    });
  };
  return user;
};

export default userDefinition;
