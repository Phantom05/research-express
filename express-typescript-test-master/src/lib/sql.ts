export interface QueryProps {
  intialize(): any;
}
export function test2() {
  return "2";
}
class Sql implements QueryProps {
  database: string;

  public getUsers = "SELECT * FROM test.users";

  constructor(props) {
    this.intialize(props);
  }
  intialize(props?: object) {
    this.database = "hello";
  }

  insertUser({ keys, values }) {
    return `INSERT INTO test.users (${keys}) values (${values})`;
  }
  getUser({ userCode }) {
    return `SELECT * FROM test.users WHERE usercode="${userCode}" `;
  }
}

export const sql = new Sql({
  database: "test",
});
module services {}

export default services;
