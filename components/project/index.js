import routes from './routes/routes.js';

export default {
  init: (app) => {
    app.use('/api/project', routes);
  }
};
