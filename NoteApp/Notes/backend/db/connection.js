import mysql from "mysql2/promise";

let connection;

export async function initdb() {
  if (connection) {
    return connection;
  }

  try {
    connection = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      port:process.env.DB_PORT
    });
    

    console.log(" MySQL Connected");
    return connection;

  } catch (error) {
    console.error("MySQL Connection Error:", error);
    throw error;
  }
}
