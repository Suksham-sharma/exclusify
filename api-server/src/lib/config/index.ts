import dotenv from "dotenv";

dotenv.config();

export const apiKey = process.env.API_KEY;

export const nftReqBody = {
  jsonrpc: "2.0",
  id: "my-id",
  method: "getAsset",
};
