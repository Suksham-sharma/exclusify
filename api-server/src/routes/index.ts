import { Router, Request, Response } from "express";
import { userRouter } from "./user";

export const apiRouter = Router();

apiRouter.use("/user", userRouter);

apiRouter.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});
