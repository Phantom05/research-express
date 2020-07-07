interface QueryProps {
  intialize(): any;
}

class Sql implements QueryProps {
  public getUsers = "SELECT * FROM test.users";
  database: string;

  constructor(props) {
    this.intialize(props);
  }
  intialize(props?: object) {
    console.log(props, "props");
    this.database = "hello";
    // this.select = ()=>{}
  }

  // select() {}

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
