const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');
// const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// это функции, которые обрабатывают HTTP-запросы и ответы в серверных приложениях.
const middlewares = jsonServer.defaults({});

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки,чтобы запрос проходил не мгновенно, имитция реального апи
server.use(async (req, res, next) => {
  await new Promise(res => {
    setTimeout(res, 800);
  });
  next();
});

// эндпоинт для логина
server.post('/login', (req, res) => {
  const { username, password } = req.body;

  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'),
  );
  const { users } = db;

  const userFromBd = users.find(
    user => user.username === username && user.password === password,
  );

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

server.use(router);

// Настрйока CORS, чтобы проходили запросы
// server.use(
//   cors({
//     origin: true,
//     credentials: true,
//     preflightContinue: false,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   }),
// );
// server.options('*', cors());

// запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
