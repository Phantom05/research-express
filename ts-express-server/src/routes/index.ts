import express from "express";
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ result: 1 });
});

// export const index = (req: Request, res: Response) => {
//   interface bodyProps={
//     result:Number;
//   }
//   const body :bodyProps ={
//     result:1
//   }
//   res.send(body);
// };

// export const test = (req: Request, res: Response) => {
//   interface bodyProps={
//     result:Number;
//     title:String;
//   }
//   const body :bodyProps = {
//     result: 1,
//     title: "/test",
//   };
//   res.json(body);
// };
export default router;
