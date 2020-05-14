const up = (queryInterface, sequelize) => queryInterface.createTable('Sorts', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER
  },
  name: {
    type: sequelize.STRING
  },
  createdAt: {
    type: sequelize.DATE,
  },
  updatedAt: {
    type: sequelize.DATE,
  },
});
const down = (queryInterface) => queryInterface.dropTable('Sorts');

export {
  up,
  down
};
