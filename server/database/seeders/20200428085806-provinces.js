const province1 = {
  name: 'Kigali City',
  createdAt: new Date(),
  updatedAt: new Date()
};

const province2 = {
  name: 'Southern Province',
  createdAt: new Date(),
  updatedAt: new Date()
};

const province3 = {
  name: 'Nothern Province',
  createdAt: new Date(),
  updatedAt: new Date()
};

const province4 = {
  name: 'Western Province',
  createdAt: new Date(),
  updatedAt: new Date()
};

const province5 = {
  name: 'Eastern Province',
  createdAt: new Date(),
  updatedAt: new Date()
};

const up = (queryInterface) => queryInterface.bulkInsert('Provinces', [province1, province2, province3, province4, province5]);
const down = (queryInterface) => queryInterface.bulkDelete('Provinces', null, {});
export {
  up,
  down
};
