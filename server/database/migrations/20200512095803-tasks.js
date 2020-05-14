const up = (queryInterface, sequelize) => queryInterface.createTable('Tasks', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER
  },
  title: {
    type: sequelize.STRING
  },
  description: {
    type: sequelize.STRING
  },
  provinceId: { type: sequelize.INTEGER },
  districtId: { type: sequelize.INTEGER },
  sectorId: { type: sequelize.INTEGER },
  collectionId: {
    type: sequelize.INTEGER
  },
  userId: {
    type: sequelize.INTEGER
  },
  salary: {
    type: sequelize.DATE,
  },
  startsAt: {
    type: sequelize.DATE,
  },
  endsAt: {
    type: sequelize.DATE,
  },
  createdAt: {
    type: sequelize.DATE,
  },
  updatedAt: {
    type: sequelize.DATE,
  }
});
const down = (queryInterface) => queryInterface.dropTable('Tasks');

export {
  up,
  down
};
