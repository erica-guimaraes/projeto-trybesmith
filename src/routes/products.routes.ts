import { Router } from 'express';
import productsController from '../controllers/products.controller';
import { validateProduct } from '../middlewares/validateProduct';

const productsRoutes = Router();

productsRoutes.post('/', validateProduct, productsController.createProduct);
productsRoutes.get('/', productsController.getAllProducts);

export default productsRoutes;
