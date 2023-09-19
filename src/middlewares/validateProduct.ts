import { NextFunction, Request, Response } from 'express';

export const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return { status: 400, data: { message: '"name" is required' },
    };
  }
  if (typeof name !== 'string') {
    return { status: 422, data: { message: '"name" must be a string' } };
  }
  if (name.length <= 2) {
    return { status: 422, data: { message: '"name" length must be at least 3 characters long' } };
  }
  next();
};

export const validatePrice = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;
  if (!price) {
    return { status: 400, data: { message: '"price" is required' },
    };
  }
  if (typeof price !== 'string') {
    return { status: 422, data: { message: '"price" must be a string' } };
  }
  if (price.length <= 2) {
    return { status: 422, data: { message: '"price" length must be at least 3 characters long' } };
  }
  next();
};

export default {
  validateName,
  validatePrice,
};