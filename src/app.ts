import bodyParser from 'body-parser';
import express from 'express';

import { Routes } from './routes/routes';

class App {
  app: express.Application;
  routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.app.use('/api', this.routes.getRouter());
  }

  private config() {
    // support application/json type post data
    this.app.use(bodyParser.json());

    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
