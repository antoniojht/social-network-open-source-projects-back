import express from 'express';
import cors from './libs/cors.js';
import server from './libs/server.js';
import components from './components/index.js';
import database from './config/database/index.js';

const app = express();

const init = async () => {
  cors.init(app);
  server.init(app);
  database.init();
  await components.init(app);
};

init();
