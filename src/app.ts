import express from 'express';
import productsRouter from './routers/ProductsRouter';
import userRouter from './routers/UserRouter';
import ordersRouter from './routers/OrdersRouter';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.status(200).send('Server funcionando'));

app.use('/products', productsRouter);

app.use('/users', userRouter);

app.use('/orders', ordersRouter);

export default app;
