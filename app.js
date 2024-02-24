import express from 'express';
import cors from './libs/cors.js';
import components from './components/index.js';
import server from './libs/server.js';

const app = express();

const init = async () => {
  cors.init(app);
  await components.init(app);
  server.init(app);
};

init();

// TODO: Remove this route example
app.get('/', (req, res) => {
  res.send('Hello World!');
});
