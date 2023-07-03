import ordersModel from '../models/OrdersModels';

const { getOrdersModel } = ordersModel;

const getOrdersService = async () => {
  const allOrders = await getOrdersModel();
  return allOrders;
};

export default {
  getOrdersService,
};