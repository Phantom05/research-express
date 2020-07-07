// // import "source-map-support/register"; // source-map을 사용하기 위해 추가함.

// import App from "./App";
// import express from "express";
// import env from "../config";

// const port: number = Number(process.env.PORT) || 3001;
// const app: express.Application = new App().app;

// app
//   .listen(port, () => console.log(`Express server listening at ${port}`))
//   .on("error", (err) => console.error(err));

// console.log(env, "env setting");

// import errorHandler from "errorhandler";

import app from "./app";

/**
 * Start Express server.
 */

const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
