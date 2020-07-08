import express from "express";
import { database } from "../../database/mysql";
import { convertObjectToCommaString } from "../../lib/utils";
import { sql } from "@/src/lib/sql";
import { Request, Response } from "express";
import { IControllerBase } from "~/interfaces/IControllerBase.interface";

// DEBUG:
import { hello } from "../../lib/test";
// import { hello } from "~/lib/test";
import { fast } from "~/fast/test";
// import { fast } from "../../fast/test";
// DEBUG:

import { v4 as uuid4 } from "uuid";
import moment from "moment";

console.log(hello());
console.log(fast());

interface responseProps {
  error?: object;
  affectedRows?: number;
}
export class HomeController implements IControllerBase {
  public path = "/";
  public router = express.Router();
  // route: routeProp;

  constructor() {
    // const _self = this;
    // this.route = {
    //   get: (url) => _self.router.get(_self.path + url),
    //   post: (url) => _self.router.post(_self.path + url),
    // };
    this.initRoutes();
  }

  public initRoutes() {
    // this.route.get("", this.index);
    // this.route.post("/insert", this.insert);

    this.router.get(this.path, this.index);
    // this.router.post(this.path + "insert", this.insert);

    // this.router.get(this.path + "/:id", this.getPost);
    // this.router.get(this.path, this.getAllPosts);
    // this.router.post(this.path, this.createPost);
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

    const data: responseProps = await database.query(
      sql.insertUser({ keys, values })
    );

    if (!!data.affectedRows) {
      const rows: any = await database.query(sql.getUser({ userCode }));
      res.json({ result: 1, ...rows[0] });
    } else {
      res.json({ result: 2 });
    }
  };
}

// export default HomeController;

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
