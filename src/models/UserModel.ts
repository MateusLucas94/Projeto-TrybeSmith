import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const postUserModel = async (username: string, classe:string, level:number, password:string) => {
  const query = `
    INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES(?, ?, ?, ?);`;

  const [data] = await connection.execute<ResultSetHeader>(
    query, 
    [username, classe, level, password],
  );

  return data;
};

export default {
  postUserModel,
};