const up = (queryInterface, sequelize) => queryInterface.createTable('Collections', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER
  },
  name: {
    type: sequelize.STRING
  },
  sortId: {
    type: sequelize.INTEGER
  },
  createdAt: {
    type: sequelize.DATE,
  },
  updatedAt: {
    type: sequelize.DATE,
  },
});
const down = (queryInterface) => queryInterface.dropTable('Collections');

export {
  up,
  down
};
