import UserRepository from '../repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';

import { sign, verify } from 'jsonwebtoken';
import { JWT } from '../../constants';

import { compare } from 'bcryptjs';

import AppError from '../errors/AppError';

interface Request {
  user: string;
  password: string;
}

interface UserWithToken {
  id: string;
  user: string;
  password?: string;
  token: string;
}

export default class SessionService {
  async authenticateUser({ user, password }: Request): Promise<UserWithToken> {
    const repository = getCustomRepository(UserRepository);

    const userFound = await repository.findOne({ where: { user } });

    if (!userFound) {
      throw new AppError('incorrect email/password');
    }

    const passwordMatched = await compare(password, userFound.password);

    if (!passwordMatched) {
      throw new AppError('incorrect email/password');
    }

    const token = sign({}, JWT.SECRET, {
      subject: userFound.id,
      expiresIn: JWT.EXPIRES_IN,
    });

    const userObjectWithToken: UserWithToken = {
      ...userFound,
      token,
    };

    return userObjectWithToken;
  }

  verifyToken(token: string) {
    try {
      var decoded = verify(token, JWT.SECRET);
      return decoded;
    } catch (err) {
      throw new AppError('invalid token', 401);
    }
  }
}
