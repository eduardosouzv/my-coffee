import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UsersRepository';

import AppError from '../errors/AppError';

import { IUser } from '../interfaces/User.interface';

export default class UserService {
  async createNewUser({ user, password }: IUser) {
    if (typeof user !== 'string' || typeof password !== 'string') {
      throw new AppError('wrong received data');
    }

    const repository = getCustomRepository(UserRepository);

    const newUser = repository.create({
      user,
      password,
    });

    await repository.save(newUser);

    return newUser.user;
  }
}
