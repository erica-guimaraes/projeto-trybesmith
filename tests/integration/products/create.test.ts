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
    expect(httpResponse.body).to.be.deep.equal({ message: '"name" is required'});
  });

  it ('Deverá retornar um erro, caso o "name" não seja do tipo string', async function () {
    const httpRequestBody = productMock.invalidNameType;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"name" must be a string'});
  });

  it ('Deverá retornar um erro, caso o "name" não possua mais de 2 caracteres', async function () {
    const httpRequestBody = productMock.invalidNameLength;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"name" length must be at least 3 characters long'});
  });

  it ('Deverá retornar um erro, caso não informe o "price"', async function () {
    const httpRequestBody = productMock.noPriceBody;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"price" is required'});
  });

  it ('Deverá retornar um erro, caso o "price" não seja do tipo string', async function () {
    const httpRequestBody = productMock.invalidPriceType;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"price" must be a string'});
  });

  it ('Deverá retornar um erro, caso o "price" não possua mais de 2 caracteres', async function () {
    const httpRequestBody = productMock.invalidPriceLength;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"price" length must be at least 3 characters long'});
  });

  it ('Deverá retornar as informações do produto registrado, ao passar pelas validações', async function () {
    const request = productMock.productRequest;
    const response = productMock.productResponse;
    const mockCreate = ProductModel.build({ id: 6, name: "Martelo de Thor", price: "30 peças de ouro",   orderId: 4 });
    sinon.stub(ProductModel, 'create').resolves(mockCreate);

    const httpResponse = await chai.request(app).post('/products').send(request);
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(response);
  });
});
