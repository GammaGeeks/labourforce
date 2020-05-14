const token1 = {
  value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJqZWFubHVjMDUiLCJlbWFpbCI6ImplYW5sdWMwNUBsaXZlLmNvbSIsInJvbGUiOiJFTVBMT1lFUiIsImlzVmVyaWZpZWQiOnRydWUsImlhdCI6MTU4OTI3Mjg0NH0.zhc6NFB2njp304rc16ekVGRNuzWHEJRBj_NXQCmEyGc',
  userId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
};


const up = (queryInterface) => queryInterface.bulkInsert('Tokens', [token1]);
const down = (queryInterface) => queryInterface.bulkDelete('Tokens', null, {});
export {
  up,
  down
};
