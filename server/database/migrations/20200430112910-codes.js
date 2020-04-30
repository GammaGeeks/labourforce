const up = (queryInterface, sequelize) => queryInterface.createTable('codes', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER
  },
  userId: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  value: {
    type: sequelize.STRING
  },
  createdAt: {
    type: sequelize.DATE,
  },
  updatedAt: {
    type: sequelize.DATE,
  },
});
const down = (queryInterface) => queryInterface.dropTable('codes');

export {
  up,
  down
};
