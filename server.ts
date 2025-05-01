
import { Request, Response, NextFunction } from 'express';

import express from 'express';  // Importación por defecto

const server = express();


server.get('*', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
