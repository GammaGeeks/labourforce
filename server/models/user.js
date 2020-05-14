const userDefinition = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    fullname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    profileImg: { type: DataTypes.STRING },
    coverImg: { type: DataTypes.STRING },
    provinceId: { type: DataTypes.INTEGER },
    districtId: { type: DataTypes.INTEGER },
    sectorId: { type: DataTypes.INTEGER },
    phoneNumber: { type: DataTypes.STRING },
    nationalId: { type: DataTypes.STRING },
    passportId: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    isVerified: { type: DataTypes.BOOLEAN },
    onDuty: { type: DataTypes.BOOLEAN },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  user.associate = (models) => {
    user.hasOne(models.Token, {
      foreignKey: 'userId',
      as: 'token',
      onDelete: 'CASCADE',
    });
    user.hasOne(models.Code, {
      foreignKey: 'userId',
      as: 'code',
      onDelete: 'CASCADE',
    });
    user.belongsTo(models.Province, {
      foreignKey: 'provinceId',
      as: 'province',
      onDelete: 'CASCADE',
    });
    user.belongsTo(models.District, {
      foreignKey: 'districtId',
      as: 'district',
      onDelete: 'CASCADE',
    });
    user.belongsTo(models.Sector, {
      foreignKey: 'sectorId',
      as: 'sector',
      onDelete: 'CASCADE',
    });
    user.hasMany(models.Task, {
      foreignKey: 'userId',
      as: 'tasks',
      onDelete: 'CASCADE',
    });
    user.belongsToMany(models.Collection, {
      through: 'UserCollections',
      as: 'collections',
      foreignKey: 'userId',
      otherKey: 'collectionId'
    });
    user.belongsToMany(models.Task, {
      through: 'UserTasks',
      as: 'employeeTasks',
      foreignKey: 'userId',
      otherKey: 'taskId'
    });
  };
  return user;
};

export default userDefinition;
