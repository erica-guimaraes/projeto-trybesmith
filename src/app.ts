import express from 'express';
import loginRoutes from './routes/login.routes';
import productsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/login', loginRoutes);

export default app;
