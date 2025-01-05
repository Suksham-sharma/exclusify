import express, { Request, Response } from "express";
import cors from "cors";
import { apiRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
