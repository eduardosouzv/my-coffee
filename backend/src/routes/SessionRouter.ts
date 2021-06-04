import { Router } from 'express';

import { createSession, verifyToken } from '../controllers/SessionController';

const SessionRouter = Router();

SessionRouter.post('/', createSession);
SessionRouter.post('/verify', verifyToken);

export default SessionRouter;
