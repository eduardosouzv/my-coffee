import { DB_USER } from './constants';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: DB_USER.user,
  password: DB_USER.password,
  database: 'mycoffee',
  entities: [__dirname + '/src/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
