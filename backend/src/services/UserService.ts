import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UsersRepository';

import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import { IUser } from '../interfaces/User.interface';

export default class UserService {
  async createNewUser({ user, password }: IUser) {
    if (typeof user !== 'string' || typeof password !== 'string') {
      throw new AppError('wrong received data', 401);
    }

    if (user.length <= 3 || password.length < 8) {
      throw new AppError('insufficient characters', 401);
    }

    const repository = getCustomRepository(UserRepository);

    const checkIfUserExists = await repository.findOne({ user: user });

    const hashedPassword = await hash(password, 8);

    if (checkIfUserExists) {
      throw new AppError(`${user} has already been created`, 401);
    }

    const newUser = repository.create({
      user,
      password: hashedPassword,
    });

    await repository.save(newUser);

    return newUser.user;
  }
}
