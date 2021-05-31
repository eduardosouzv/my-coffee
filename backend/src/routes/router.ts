import { Router } from 'express';

import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';

const routes = Router();

routes.use('/products', ProductRouter);
routes.use('/user', UserRouter);

export default routes;
