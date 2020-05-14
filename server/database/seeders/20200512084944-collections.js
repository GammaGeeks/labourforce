const collection1 = {
  name: 'Feraire',
  sortId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
};

const collection2 = {
  name: 'Charpantier',
  sortId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
};

const collection3 = {
  name: 'Maid',
  sortId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
};

const collection4 = {
  name: 'Worker',
  sortId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
};

const collection5 = {
  name: 'Security guard',
  sortId: 5,
  createdAt: new Date(),
  updatedAt: new Date()
};

const up = (queryInterface) => queryInterface.bulkInsert('Collections', [collection1, collection2, collection3, collection4, collection5]);
const down = (queryInterface) => queryInterface.bulkDelete('Collections', null, {});
export {
  up,
  down
};
