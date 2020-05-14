const sort1 = {
  name: 'Construction',
  createdAt: new Date(),
  updatedAt: new Date()
};

const sort2 = {
  name: 'Home tasks',
  createdAt: new Date(),
  updatedAt: new Date()
};

const sort3 = {
  name: 'Delivery',
  createdAt: new Date(),
  updatedAt: new Date()
};

const sort4 = {
  name: 'Cleaner',
  createdAt: new Date(),
  updatedAt: new Date()
};

const sort5 = {
  name: 'Protection',
  createdAt: new Date(),
  updatedAt: new Date()
};

const up = (queryInterface) => queryInterface.bulkInsert('Sorts', [sort1, sort2, sort3, sort4, sort5]);
const down = (queryInterface) => queryInterface.bulkDelete('Sorts', null, {});
export {
  up,
  down
};
