// import * as express from "express";
// // import cookieParser from "cookie-parser";

// // import indexRouter from "./routes/index";
// // console.log(indexRouter);
// class App {
//   public app: express.Application;

//   /**
//    * @ class App
//    * @ method bootstrap
//    * @ static
//    *
//    */
//   public static bootstrap(): App {
//     return new App();
//   }

//   constructor() {
//     this.app = express();
//     // this.app.use(cookieParser());
//     // this.app.use("/", indexRouter);

//     // this.app.get(
//     //   "/",
//     //   (
//     //     req: express.Request,
//     //     res: express.Response,
//     //     next: express.NextFunction
//     //   ) => {
//     //     res.send("Hello world");
//     //   }
//     // );
//   }
// }

// export default App;

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import * as homeController from "./controllers/home";
const app = express();

app.use(cors());
app.set("port", process.env.PORT || 5502);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.set("views", path.join(__dirname, "../views"));
// app.set("view engine", "pug");
// app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", homeController.index);
// app.get("/test", homeController.index);

app.use(function (err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
