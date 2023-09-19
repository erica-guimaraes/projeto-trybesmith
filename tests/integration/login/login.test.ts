import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('Testando a rota Login', function () { 
  beforeEach(function () { sinon.restore(); });
  it ('Deverá retornar um erro, caso não informe o "username"', async function () {
    const httpRequestBody = loginMock.noUsernameBody;

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required'});    
  });

  it ('Deverá retornar um erro, caso não informe o "email"', async function () {
    const httpRequestBody = loginMock.noPasswordBody;

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required'});    
  });

  it ('Deverá retornar um erro, caso o "username" não exista', async function () {
    const httpRequestBody = loginMock.invalidUsername;
    sinon.stub(UserModel, 'findOne').resolves(null);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);


    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid'});    
  });
});
