import { Router } from 'express';

import { createTransaction } from '../controllers/TransactionsController';
import ensureAuth from '../middlewares/ensureAuth';

const SessionRouter = Router();

SessionRouter.post('/create', ensureAuth, createTransaction);

export default SessionRouter;
