import UserRepository from '../repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';

import User from '../models/User';

import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '../../constants';

import { compare } from 'bcryptjs';

import AppError from '../errors/AppError';

interface Request {
  user: string;
  password: string;
}

export default class SessionService {
  async authenticateUser({
    user,
    password,
  }: Request): Promise<{ user: User; token: string }> {
    const repository = getCustomRepository(UserRepository);

    const userFound = await repository.findOne({ where: { user } });

    if (!userFound) {
      throw new AppError('incorrect email/password');
    }

    const passwordMatched = await compare(password, userFound.password);

    if (!passwordMatched) {
      throw new AppError('incorrect email/password');
    }

    const token = sign({}, JWT_SECRET, {
      subject: userFound.id,
      expiresIn: '1d',
    });

    return {
      user: userFound,
      token: token,
    };
  }
}
