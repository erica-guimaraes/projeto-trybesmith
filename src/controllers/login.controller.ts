import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function createLogin(req: Request, res: Response): Promise<Response> {
  const user = req.body;
  const { status, data } = await loginService.createLogin(user);
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  createLogin,
};