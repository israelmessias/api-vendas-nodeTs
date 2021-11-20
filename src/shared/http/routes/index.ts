import productsRouter from '@modules/products/routes/ProductsRouter';
import userRouter from '@modules/users/routes/UserRouter';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.use('/users', userRouter);

export default routes;
