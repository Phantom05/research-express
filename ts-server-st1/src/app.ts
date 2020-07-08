import express from "express";
import { test } from "~/lib/utils";

const app = express();
const port = 3005;
app.get("/", (req, res) => {
  console.log(test());
  res.send("The sedulous hyena ate the antelope!");
});
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
// "exec": "ts-node ./src/app.ts"
// nodemon --exec babel-node  ./bin/www
