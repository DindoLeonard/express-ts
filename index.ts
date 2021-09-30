import express from 'express';
import router from './routes';

const app = express();

// for you to parse the body
app.use(express.json());

app.use(router);

// GET, POST, PUT, DELETE

app.get('/', (req, res, next) => {
  console.log('passed in /');
  res.json({ message: 'hello' });
});

app.get('/hello', (req, res, next) => {
  console.log('passed in here');
  res.json({ message: 'from hello' });
});

app.listen(3000, () => {
  console.log('server is running');
});
