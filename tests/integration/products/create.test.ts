import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
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

  it ('ao receber o request no formato correto, retorne as informações do produto registrado', async function () {
    const request = productMock.productRequest;
    const response = productMock.productResponse;
    const mockCreate = ProductModel.build({ id: 6, name: "Martelo de Thor", price: "30 peças de ouro",   orderId: 4 });
    sinon.stub(ProductModel, 'create').resolves(mockCreate);

    const httpResponse = await chai.request(app).post('/products').send(request);
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(response);
  });
});
