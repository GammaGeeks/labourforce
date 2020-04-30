const districts = [
  {
    provinceId: 1,
    name: 'Kicukiro',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 1,
    name: 'Gasabo',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 1,
    name: 'Nyarugenge',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 2,
    name: 'Huye',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 2,
    name: 'Nyaruguru',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 2,
    name: 'Gisagara',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 2,
    name: 'Nyamagabe',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 2,
    name: 'Nyanza',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 2,
    name: 'Ruhango',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 2,
    name: 'Muhanga',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 2,
    name: 'Kamonyi',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 5,
    name: 'Bugesera',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 5,
    name: 'Gatsibo',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 5,
    name: 'Kayonza',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 5,
    name: 'Kirehe',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 5,
    name: 'Ngoma',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 5,
    name: 'Nyagatare',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 5,
    name: 'Rwamagana',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 3,
    name: 'Burera',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 3,
    name: 'Gakenke',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 3,
    name: 'Gicumbi',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 3,
    name: 'Musanze',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 3,
    name: 'Rulindo',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 4,
    name: 'Karongi',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 4,
    name: 'Ngororero',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 4,
    name: 'Nyabihu',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 4,
    name: 'Nyamasheke',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 4,
    name: 'Rubavu',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 4,
    name: 'Rusizi',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    provinceId: 4,
    name: 'Rutsiro',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const up = (queryInterface) => queryInterface.bulkInsert('districts', districts);
const down = (queryInterface) => queryInterface.bulkDelete('districts', null, {});
export {
  up,
  down
};
