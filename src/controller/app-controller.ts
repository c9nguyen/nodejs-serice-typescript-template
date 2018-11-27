import { Request, Response, Router } from 'express';

export class AppController {
  ping(req: Request, res: Response) {
    res.send('OK');
  }
}
