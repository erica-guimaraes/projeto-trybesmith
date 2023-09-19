import { Optional } from 'sequelize';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

type ProductResponse = Optional<Product, 'orderId'>;

async function createProduct(product: ProductInputtableTypes): 
Promise<ServiceResponse<ProductResponse>> {
  const newProduct = await ProductModel.create(product);
  const { id, name, price } = newProduct.dataValues;
  return { status: 'CREATED', data: { id, name, price } };
}

async function getAllProducts(): Promise<ServiceResponse<Product[]>> {
  const allProducts = await ProductModel.findAll();
  const data = allProducts.map((product) => product.dataValues);
  return { status: 'SUCCESSFUL', data };
}

export default {
  createProduct,
  getAllProducts,
};