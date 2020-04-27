const up = (queryInterface, sequelize) => queryInterface.createTable('sectors', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER
  },
  provinceId: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  districtId: {
    type: sequelize.INTEGER,
    allowNull: false
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
const down = (queryInterface) => queryInterface.dropTable('sectors');

export {
  up,
  down
};
