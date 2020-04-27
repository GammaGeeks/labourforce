import Hasher from '../../helpers/passwordHasher';

const dummy1 = {
  fullname: 'Vincent Musangamfura',
  email: 'musangamfuravincent@gmail.com',
  username: 'Mvincent',
  gender: 'Male',
  profileImg: 'https://tnj.com/wp-content/uploads/2018/06/JayM.jpg',
  coverImg: 'https://cdn.pixabay.com/photo/2019/08/07/06/31/landscape-4389957__340.jpg',
  locationIds: [1, 2, 3],
  phoneNumber: '0788501500',
  nationalId: '1199000000008216',
  passportId: 'PC1239784',
  password: Hasher.hashPassword('123456789'),
  role: 'ADMIN',
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date()
};

const up = (queryInterface) => queryInterface.bulkInsert('users', [dummy1]);
const down = (queryInterface) => queryInterface.bulkDelete('users', null, {});
export {
  up,
  down
};
