import { NextFunction, Request, Response } from 'express';

export const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, price, orderId } = req.body;
  if (!name || !price || !orderId) {
    return res.status(400).json({ message: 'Check required fields' });
  }
  next();
};

export default {
  validateProduct,
};