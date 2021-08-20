export const BASE_URL = 'http://localhost:3333';

export const JWT = {
  SECRET: process.env.JWT_SECRET || 'test',
  EXPIRES_IN: '1d',
};
