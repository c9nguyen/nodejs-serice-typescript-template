import { Request, Response } from 'express';

export class AppController {
  ping(req: Request, res: Response) {
    res.send('OK');
  }
}
