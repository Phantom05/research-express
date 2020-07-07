import App from "./app";

import * as bodyParser from "body-parser";
import loggerMiddleware from "./middleware/logger";

import { PostsController } from "./controllers/posts/posts.controller";
import { HomeController } from "./controllers/home/home.controller";
import { UsersController } from "./controllers/users/users.controller";

const app = new App({
  port: 5502,
  controllers: [
    new HomeController(),
    new PostsController(),
    new UsersController(),
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
  ],
});

app.listen();
