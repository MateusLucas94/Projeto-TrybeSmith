import { Router } from 'express';
import userController from '../controllers/userController';

const { postUsers } = userController;

const router = Router();

router.post('/', postUsers);

export default router;