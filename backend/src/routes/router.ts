import { Router } from 'express';

import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';
import SessionRouter from './SessionRouter';
import TransactionRouter from './TransactionRouter';

const routes = Router();

routes.use('/products', ProductRouter);
routes.use('/user', UserRouter);
routes.use('/session', SessionRouter);
routes.use('/transaction', TransactionRouter);

export default routes;
