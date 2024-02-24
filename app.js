import express from 'express';
import cors from './libs/cors.js';
import components from './components/index.js';
import server from './libs/server.js';

const app = express();

const init = async () => {
  cors.init(app);
  server.init(app);
  await components.init(app);
};

init();
