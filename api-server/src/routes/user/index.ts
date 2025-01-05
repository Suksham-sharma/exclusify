import { Router } from "express";
import { userManager } from "../../lib/userManager/userManager";

export const userRouter = Router();

userRouter.post("/generate-link", userManager.GetUserJoinLink);
