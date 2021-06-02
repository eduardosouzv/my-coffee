import { Router } from 'express';

import { createSession } from '../controllers/SessionController';

const SessionRouter = Router();

SessionRouter.post('/', createSession);

export default SessionRouter;
