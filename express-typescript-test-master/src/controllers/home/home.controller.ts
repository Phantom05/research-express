import * as express from "express";
import * as moment from "moment";
import { database } from "../../database/mysql";
import { convertObjectToCommaString } from "../../lib/utils";
import { sql } from "../../lib/query";
import { v4 as uuid4 } from "uuid";
import { Request, Response } from "express";
import IControllerBase from "interfaces/IControllerBase.interface";

// export interface FunDb<T> {
//   (err: mysql.IError, rows: T[]): void;
// }

// function typedRows<T>(q, replaces?, callback? : FunDb<T>) {
//    return conn.query(q, replaces, (err, result : T[]) => {
//      if (err) {
//        console.log('Error Query', q,  err);
//      }
//      if (callback) {
//        callback(err, result);
//      }
//    });
// }

class HomeController implements IControllerBase {
  public path = "/";
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path, this.index);
    this.router.post(this.path + "insert", this.insert);
  }

  index = async (req: Request, res: Response) => {
    const qs = sql.getUsers;
    const rows = await database.query(qs);
    const body = {
      result: 1,
      users: rows,
    };
    res.json(body);
  };
  insert = async (req: Request, res: Response) => {
    const userCode = uuid4().replace(/\-/g, "");
    const createAt = moment().unix();
    const { email, password } = req.body;
    const convertFormat = {
      email,
      password,
      userCode,
      createAt,
    };
    const { keys, values } = convertObjectToCommaString(convertFormat);

    interface res {
      error?: object;
      affectedRows?: number;
    }
    const data: res = await database.query(sql.insertUser({ keys, values }));

    if (!!data.affectedRows) {
      const rows: any = await database.query(sql.getUser({ userCode }));
      res.json({ result: 1, ...rows[0] });
    } else {
      res.json({ result: 2 });
    }
  };
}

export default HomeController;
