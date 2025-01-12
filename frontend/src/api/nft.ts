import axios from "axios";
import { BASE_URL } from "../config";
export const getCollectionInfo = async (nftId: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/nft/collection-info/${nftId}`
    );
    if (!response.data) throw new Error("No data found");
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
