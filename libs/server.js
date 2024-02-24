import logger from './logger.js';
import 'dotenv/config';

const port = process.env.SERVICE_PORT || 3000;
const host = process.env.SERVICE_HOST || 'http://localhost';

export default {
  init: (app) => {
    app.listen(port, () => {
      logger.info(`Server listening at ${host}:${port}`);
    });
  },
};
