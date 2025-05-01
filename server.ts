import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

const server = express();

server.get('*', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
