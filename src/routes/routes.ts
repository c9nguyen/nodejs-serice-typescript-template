import { Request, Response, Router } from 'express';

export class Routes {

  /**
   * Get router contains all routes
   */
  getRouter(): Router {
    const router = Router();

    router.route('/health').get((req: Request, res: Response) => {
      res.send('OK');
    });

    return router;
  }
}