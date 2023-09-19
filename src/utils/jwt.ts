import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: number,
  email: string,
};

const createToken = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

const verifyToken = (authorization: string): TokenPayload => {
  const token = authorization.split(' ')[1];
  const decoded = jwt.verify(token, secret) as TokenPayload;
  return decoded;
};

export default {
  createToken,
  verifyToken,
};