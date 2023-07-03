import { Request, Response } from 'express';
import userService from '../services/UserService';

const { postUserService } = userService;

const postUsers = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;

  const response = await postUserService(username, classe, level, password);
  
  return res.status(201).json(response);
};

export default {
  postUsers,
};