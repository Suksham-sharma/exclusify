import { Router, Request, Response } from "express";
import { nftManager } from "../lib/nftManager/nftManager";

export const nftRouter = Router();

nftRouter.get(
  "/collection-info/:nftId",
  async (req: Request, res: Response) => {
    try {
      const nftId = req.params.nftId;

      if (!nftId) {
        res.status(400).json({ message: "NFT ID not provided" });
        return;
      }

      const collectionInfo = await nftManager.getDetailsAboutNFT(nftId);

      if (!("collectionName" in collectionInfo))
        throw new Error(collectionInfo.message);

      res.status(200).json(collectionInfo);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching NFT details", error.message);
      }

      res
        .status(500)
        .json({ message: "Failed to fetch NFT details", error: error });
    }
  }
);
