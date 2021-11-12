import express from 'express';
import cors from 'cors';
import routes from './http/routes';

const app = express();

app.use(cors());
//api trabalha com o padrão json
app.use(routes);

app.listen(333, () => {
  console.log('Server started on port 333! 🏆');
});
