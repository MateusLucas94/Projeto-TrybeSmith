import { Router } from 'express';
import ordersController from '../controllers/OrdersController';

const { getOrders } = ordersController;

const router = Router();

router.get('/', getOrders);

export default router;