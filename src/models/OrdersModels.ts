import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const getOrdersModel = async () => {
  const query = `
  SELECT orders.id, userId,
  JSON_ARRAYAGG(products.id) AS productsIds
  FROM Trybesmith.Orders AS orders
  INNER JOIN Trybesmith.Products AS products ON products.orderId = orders.id
  GROUP BY orderId;
`;

  const [data] = await connection.execute<ResultSetHeader>(
    query, 
  );

  return data;
};

export default {
  getOrdersModel,
};