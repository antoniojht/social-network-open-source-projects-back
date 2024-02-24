import 'dotenv/config';
import logger from './logger.js';

const port = process.env.SERVICE_PORT || 3000;

export default {
  init: (app) => {
    app.listen(port, () => {
      // TODO: Change host
      logger.info(`Server listening at http://localhost:${port}`);
    });
  },
};
