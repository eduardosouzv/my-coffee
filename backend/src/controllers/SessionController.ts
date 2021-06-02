import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import SessionService from '../services/SessionService';

export const createSession = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { user, password } = request.body;
      const userCredentials = await new SessionService().authenticateUser({
        user,
        password,
      });

      response.json(userCredentials);
    } catch (err) {
      next(err);
    }
  },
);
