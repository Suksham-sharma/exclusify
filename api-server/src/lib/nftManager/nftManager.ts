import axios from "axios";
import { apiKey, nftReqBody } from "../config";

class NFTManager {
  static instance: NFTManager;
  private url: string = `https://mainnet.helius-rpc.com/?api-key=${apiKey}`;

  static getInsatnce() {
    if (!this.instance) {
      this.instance = new NFTManager();
    }
    return this.instance;
  }

  constructor() {}

  async getDetailsAboutNFT(nftId: string) {
    try {
      const response = await axios.post(this.url, {
        ...nftReqBody,
        params: { id: nftId },
      });
      const { result } = response.data;

      const collectionInfo = {
        collectionName: result.content.metadata.symbol,
        tokenStandard: result.content.metadata.token_standard,
        groupValue: result.grouping[0].group_value,
      };

      return collectionInfo;
    } catch (error) {
      console.log("Error fetching NFT details", error);
      return {
        message: "Failed to fetch NFT details",
      };
    }
  }
}

export const nftManager = NFTManager.getInsatnce();
