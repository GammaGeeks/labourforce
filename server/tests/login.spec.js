import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

import usersTester from './mockData/loginData';

chai.use(chaiHttp);
const router = () => chai.request(app);

describe('Test for signup endpoint', () => {
  it('should login a user with appropriate credentials', async () => {
    const res = await router()
      .post('/api/auth/login')
      .send(usersTester[0]);
    expect(res.body.status).to.equal(201);
    expect(res.body).to.be.an('object');
    expect(res.body.message).to.be.a('string');
    expect(res.body.data).to.be.an('object');
  });

  it(`shouldn't login a user with invalid credentials`, async () => {
    const res = await router()
      .post('/api/auth/login')
      .send(usersTester[1]);
    expect(res.body.status).to.equal(401);
    expect(res.body).to.be.an('object');
    expect(res.body.error).to.be.a('string');
  });

  it(`shouldn't login a user with inappropriate credentials`, async () => {
    const res = await router()
      .post('/api/auth/login')
      .send(usersTester[2]);
    expect(res.body.status).to.equal(400);
    expect(res.body).to.be.an('object');
    expect(res.body.error).to.be.a('string');
  });
});
