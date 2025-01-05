import TelegramBot from "node-telegram-bot-api";
import axios from "../node_modules/axios";
import { config } from "dotenv";

import { readFileSync } from "fs";

const nftCollectionData: string[] = [];

const API_URL = `https://mainnet.helius-rpc.com/?api-key=e3326538-c86d-4aea-82c2-803913557f93`;

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN!, {
  polling: false,
});
const CHANNEL_USERNAME =
  process.env.TELEGRAM_CHANNEL_USERNAME || "-1002309413812";

async function generateInviteLink() {
  try {
    const expirationTime = Math.floor(Date.now() / 1000) + 2 * 60;

    const invite = await bot.createChatInviteLink(CHANNEL_USERNAME, {
      expire_date: expirationTime,
      member_limit: 1,
      creates_join_request: false,
    });

    console.log(
      `Generated link: ${invite.invite_link} at ${new Date().toISOString()}`
    );

    return {
      link: invite.invite_link,
      expiresAt: new Date(expirationTime * 1000).toISOString(),
    };
  } catch (error) {
    console.error("Error generating invite link:", error);
    return {
      message: "Failed to generate Invite Link",
    };
  }
}

export async function verifyNftandReturnLink(account?: string) {
  try {
    const apiKey = process.env.COLLAB_LAND_API_KEY;

    console.log("apiKey ", apiKey);
    const rule = {
      tokenId: "CD65AhREkE1VGenrEweVbBfk7CS4iwz9PF3ztgqX636o",
      roleId: "001",
      chainId: 8000000000101,
      minToken: "1",
      contractAddress: "mint",
      type: "SOLANA_NFT",
    };

    console.log("data hey", {
      account: account,
      rules: rule,
    });

    const requestId = await axios.post(
      "https://api.collab.land/access-control/check-roles",
      {
        account: account,
        rules: [rule],
      },
      {
        headers: {
          "x-api-key": apiKey,
        },
      }
    );

    console.log("hello 1234", requestId.data);

    if (!requestId.data.roles[0].granted) {
      return {
        message: "Access Denied",
      };
    }

    const result = await generateInviteLink();
    console.log(result);

    return {
      link: result.link,
      expiresAt: result.expiresAt,
      message: result.message,
    };
  } catch (error: any) {
    console.log("error ,", error.message);
  }
}

async function fetchAssetsByOwner(ownerAddress: string, page: number) {
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
  return response.data.result;
}

export async function getNftsByWalletAddress(ownerAddress: string) {
  try {
    let page = 1;
    let isUserValidated = false;

    while (page) {
      const response = await axios.post(
        API_URL,
        {
          jsonrpc: "2.0",
          id: "unique-id",
          method: "getAssetsByOwner",
          params: {
            ownerAddress: ownerAddress,
            page: page,
            limit: 1000,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { result } = response.data;
      result.items.forEach((nft: any) => {
        const nftInCollection = nftCollectionData.includes(nft);
        if (nftInCollection) isUserValidated = true;
      });
      if (result.total !== 1000) {
        page = 0;
      } else {
        page++;
      }
    }

    console.log("user Valid", isUserValidated);
  } catch (error) {
    console.error("Error fetching assets:", error);
  }
}
