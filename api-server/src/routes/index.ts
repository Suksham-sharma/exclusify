import { Router, Request, Response } from "express";
import { userRouter } from "./user";
import { nftRouter } from "./nft";

export const apiRouter = Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/nft", nftRouter);

apiRouter.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});
