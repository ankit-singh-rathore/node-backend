import { Request, Response, NextFunction } from 'express';

export const logger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log({
    method: req.method,
    url: req.originalUrl,
    body: req.body,
  });
  next();
};