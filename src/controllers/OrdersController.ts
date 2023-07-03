import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const { getOrdersService } = ordersService;

const getOrders = async (_req: Request, res: Response) => {
  const response = await getOrdersService();
  return res.status(200).json(response);
};

export default {
  getOrders,
};