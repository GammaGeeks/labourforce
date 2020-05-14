import Hasher from '../../helpers/passwordHasher';

const dummy = [{
  fullname: 'Lievin Ihame',
  email: 'ihamelievin@yahoo.com',
  username: 'ILievin',
  gender: 'Male',
  profileImg: 'https://tnj.com/wp-content/uploads/2018/06/JayM.jpg',
  coverImg: 'https://cdn.pixabay.com/photo/2019/08/07/06/31/landscape-4389957__340.jpg',
  provinceId: 1,
  districtId: 2,
  sectorId: 3,
  phoneNumber: '0788501500',
  nationalId: '1199000005008216',
  passportId: 'PC1239784',
  password: Hasher.hashPassword('123456789'),
  role: 'EMPLOYEE',
  isVerified: true,
  onDuty: true,
  createdAt: new Date(),
  updatedAt: new Date()
}];

const up = (queryInterface) => queryInterface.bulkInsert('Users', dummy);
const down = (queryInterface) => queryInterface.bulkDelete('Users', null, {});
export {
  up,
  down
};
