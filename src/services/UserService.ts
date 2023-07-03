import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import UserModel from '../models/UserModel';

dotenv.config();

const { postUserModel } = UserModel;

const secret: string = process.env.JWT_SECRET || 'trybesmith';

const postUserService = async (username: string, classe:string, level:number, password:string) => {
  await postUserModel(username, classe, level, password);

  const token = jwt.sign({ username }, secret);
  
  return { token };
};

export default {
  postUserService,
};