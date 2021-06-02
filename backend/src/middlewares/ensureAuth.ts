import { NextFunction, Request, Response } from 'express';

import { verify } from 'jsonwebtoken';
import { JWT } from '../../constants';

import AppError from '../errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('missing jwt token');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, JWT.SECRET);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new AppError('invalid jwt token');
  }
}
