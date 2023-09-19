import { Router } from 'express';
import loginController from '../controllers/login.controller';
import { validateLogin } from '../middlewares/validateLogin';

const loginRoutes = Router();

loginRoutes.post('/', validateLogin, loginController.createLogin);

export default loginRoutes;