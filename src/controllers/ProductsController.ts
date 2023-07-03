import { Request, Response } from 'express';
import productService from '../services/ProductsService';

const { postProductService, getProductService } = productService;

const postProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;

  const response = await postProductService(name, amount);
  
  return res.status(201).json(response);
};

const getProducts = async (_req: Request, res: Response) => {
  const response = await getProductService();
  return res.status(200).json(response);
};

export default {
  postProduct,
  getProducts,
};