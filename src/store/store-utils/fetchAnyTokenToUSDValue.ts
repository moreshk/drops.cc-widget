import { quoteUrl } from "@/config/url";
import { stableUSDC } from "@/utils/defaultTokens";
import { QuoteResponse } from "@jup-ag/api";

export const fetchAnyTokenToUSDValue = async (
  token: CompleteToken,
  tokenAmount: string
) => {
  if (+tokenAmount > 0 && stableUSDC.address !== token.address) {
    try {
      const amount = +tokenAmount * 10 ** token.decimals;
      const url = `${quoteUrl}?inputMint=${token.address}&outputMint=${
        stableUSDC.address
      }&amount=${amount.toFixed(0)}`;
      const response = await fetch(url);
      const quoteResponse: QuoteResponse = await response.json();
      return {
        success: true,
        amount: `${+quoteResponse.outAmount / 10 ** stableUSDC.decimals}`,
      };
    } catch (e) {
      return {
        success: false,
        message: "error fetching token value",
        amount: "0",
      };
    }
  }
  return { amount: `${+tokenAmount}`, success: true };
};
