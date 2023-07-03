import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const createProduct = async (name: string, amount: string) => {
  const query = `
    INSERT INTO Trybesmith.Products (name, amount) 
    VALUES(?, ?);`;

  const [data] = await connection.execute<ResultSetHeader>(
    query, 
    [name, amount],
  );

  const newProduct = {
    id: data.insertId,
    name,
    amount,
  };

  return newProduct;
};

const getProductsModel = async () => {
  const query = 'SELECT * FROM Trybesmith.Products;';

  const [data] = await connection.execute(query);
  return data;
};

export default {
  createProduct,
  getProductsModel,
};