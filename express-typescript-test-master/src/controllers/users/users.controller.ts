import * as express from "express";
import { Request, Response } from "express";
import { IControllerBase } from "~/interfaces/IControllerBase.interface";

export class UsersController implements IControllerBase {
  public path = "/users";
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path, this.index);
  }

  index = (req: Request, res: Response) => {
    console.log("??");
    const users = [
      {
        id: 1,
        name: "Ali",
      },
      {
        id: 2,
        name: "Can",
      },
      {
        id: 3,
        name: "Ahmet",
      },
    ];

    const body = {
      name: "users router",
      result: 1,
      users: users,
    };
    res.send(body);
  };
}

// export default HomeController;
