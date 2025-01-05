import { Request, Response } from "express";
import { ed25519 } from "@noble/curves/ed25519";
import bs58 from "bs58";
import axios from "axios";
import { nftCollectionData } from "../../db";
import { config } from "dotenv";
import { generateInviteLink } from "../utils";

config();

const apiKey = process.env.API_KEY;

const API_URL = `https://mainnet.helius-rpc.com/?api-key=${apiKey}`;

export class UserManager {
  abc = "hello";
  private static instance: UserManager;

  public static getInstance() {
    if (!this.instance) {
      this.instance = new UserManager();
      console.log("this", this.instance);
    }
    return this.instance;
  }

  private verifySignature(
    publicKeyBase58: string,
    secret: string,
    signatureBase58: any
  ) {
    console.log("entered here");
    try {
      console.log("entered here");
      const publicKey: Uint8Array = bs58.decode(publicKeyBase58);
      const signature = new Uint8Array(signatureBase58);
      const encodedMessage: Uint8Array = new TextEncoder().encode(secret);

      return ed25519.verify(signature, encodedMessage, publicKey);
    } catch (error: any) {
      console.log(error.message);
      return false;
    }
  }

  private async fetchAssetsByOwner(ownerAddress: string, page: number) {
    try {
      const response = await axios.post(
        API_URL,
        {
          jsonrpc: "2.0",
          id: "unique-id",
          method: "getAssetsByOwner",
          params: {
            ownerAddress,
            page,
            limit: 1000,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return {
        status: true,
        data: response.data.result,
      };
    } catch (error: any) {
      return {
        status: false,
        message: error.message,
      };
    }
  }

  private async verifyUserNFT(ownerAddress: string) {
    try {
      let page = 1;
      let isUserValidated = false;

      while (page) {
        const result = await this.fetchAssetsByOwner(ownerAddress, page);

        if (!result.status) throw new Error("Unable to  Get User's NFT Data");

        const UserNFTs = result.data;

        UserNFTs.items.forEach((nft: any) => {
          if (nftCollectionData.includes(nft.id)) {
            isUserValidated = true;
          }
        });

        if (UserNFTs.items.length < 1000) break;
        page++;
      }

      console.log("User Validated", isUserValidated);

      return {
        validation: isUserValidated,
        message: isUserValidated
          ? "success"
          : "user don't have the required nfts",
      };
    } catch (error: any) {
      console.error("Error fetching assets:", error.message || error);
      return { validation: false, message: error.message };
    }
  }

  GetUserJoinLink = async (req: Request, res: Response) => {
    try {
      const { publicKey, signature, secret } = req.body;

      console.log(req.body);
      console.log("abc", this.abc);

      if (!publicKey || !signature || !secret) {
        res.status(400).json({ message: "Data not in the expected Format" });
        return;
      }
      console.log("+++++++++++", this);

      // const isValid = this.verifySignature(publicKey, secret, signature);

      const isValid = true;

      console.log(isValid);

      console.log("------------");
      if (!isValid) {
        res.json("Unauthorized Access");
        return;
      }

      const result = await this.verifyUserNFT(publicKey);

      console.log("result", result);

      if (!result.validation) {
        res.status(403).json(result.message);
        return;
      }

      const responseData = await generateInviteLink();

      res.json(responseData);
    } catch (err: any) {
      console.log("some error occured", err.message);
      res.json("Some Error Occured");
    }
  };
}

export const userManager = UserManager.getInstance();
