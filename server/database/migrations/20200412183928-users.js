const up = (queryInterface, Sequelize) => queryInterface.createTable('users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  fullname: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  profileImg: {
    type: Sequelize.STRING
  },
  coverImg: {
    type: Sequelize.STRING
  },
  provinceId: { type: Sequelize.INTEGER },
  districtId: { type: Sequelize.INTEGER },
  sectorId: { type: Sequelize.INTEGER },
  phoneNumber: {
    type: Sequelize.STRING
  },
  nationalId: {
    type: Sequelize.STRING,
    unique: true
  },
  passportId: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING,
    defaultValue: 'EMPLOYER'
  },
  password: {
    type: Sequelize.STRING
  },
  isVerified: {
    type: Sequelize.BOOLEAN
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

const down = (queryInterface) => queryInterface.dropTable('users');

export { up, down };
