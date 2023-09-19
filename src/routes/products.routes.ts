import { Router } from 'express';
import productsController from '../controllers/products.controller';
import { validateName, validatePrice } from '../middlewares/validateProduct';

const productsRoutes = Router();

productsRoutes.post('/', validateName, validatePrice, productsController.createProduct);
productsRoutes.get('/', productsController.getAllProducts);

export default productsRoutes;
