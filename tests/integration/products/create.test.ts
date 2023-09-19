import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../src/app';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('Testando a rota Products', function () { 
  beforeEach(function () { sinon.restore(); });
  it ('Deverá retornar um erro, caso não informe o "name"', async function () {
    const httpRequestBody = productMock.noNameBody;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Check required fields'});
  });

  it ('Deverá retornar um erro, caso não informe o "price"', async function () {
    const httpRequestBody = productMock.noPriceBody;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Check required fields'});
  });

  it ('Deverá retornar um erro, caso não informe o "order"', async function () {
    const httpRequestBody = productMock.noOrderBody;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Check required fields'});
  });
});
