import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import './database';

import AppError from './errors/AppError';

import routes from './routes/router';

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
