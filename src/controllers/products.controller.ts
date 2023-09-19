import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const infoProduct = req.body;
  const { status, data } = await productsService.createProduct(infoProduct);
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  createProduct,
};