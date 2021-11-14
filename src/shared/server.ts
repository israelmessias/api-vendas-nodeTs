import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './typeorm';
import AppError from './errors/AppError';

const app = express();

app.use(cors());
//api trabalha com o padrão json
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    /*Erro causado pela aplicação*/
    if (error instanceof AppError) {
      return response.status(error.statuscode).json({
        status: 'error',
        message: error.message,
      });
    }
    /*Erro causado pelo servidor*/
    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

/*o listen cria a porta para o caminho*/
app.listen(333, () => {
  console.log('\n\t\tServer started on port 333! 🏆');
});
