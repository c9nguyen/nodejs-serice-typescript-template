import { Router } from 'express';

import { AppController } from '../controller/app-controller';

export class Routes {

  private appController = new AppController();

  /**
   * Get router contains all routes
   */
  getRouter(): Router {
    const router = Router();

    router.route('/health').get(this.appController.ping);

    return router;
  }
}
