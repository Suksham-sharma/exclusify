import express, { Request, Response } from "express";
import cors from "cors";
import { apiRouter } from "./routes";
import { nftManager } from "./lib/nftManager/nftManager";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

nftManager.getDetailsAboutNFT("5jAjB4U98dvoHACM9DuTGbNgLgvWQFMd9sdsYDD9Xjz9");

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
