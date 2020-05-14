const up = (queryInterface, Sequelize) => queryInterface.createTable('Users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  fullname: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  username: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
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
  password: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING,
    defaultValue: 'EMPLOYER'
  },
  isVerified: {
    type: Sequelize.BOOLEAN
  },
  onDuty: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
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

const down = (queryInterface) => queryInterface.dropTable('Users');

export { up, down };
