import * as mysql from "mysql";
// import fs from "fs";

const databaseConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "test",
  insecureAuth: true,
};

// interface DatabaseProps {
//   sql: String;
//   args?: string;
// }

class Database {
  public connection: any;
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }
  query(sql: String, args?: String) {
    // const { sql, args } = props;
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    }).catch((err) => ({ error: err }));
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) return reject(err);
        resolve();
      });
    }).catch((err) => ({ error: err }));
  }
}

export const database = new Database(databaseConfig);
