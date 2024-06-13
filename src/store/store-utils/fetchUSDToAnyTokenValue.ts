import { quoteUrl } from "@/config/url";
import { stableUSDC } from "@/utils/defaultTokens";
import { QuoteResponse } from "@jup-ag/api";

export const fetchUSDToAnyTokenValue = async (
  token: CompleteToken,
  tokenAmount: string
) => {
  if (+tokenAmount > 0 && stableUSDC.address !== token.address) {
    try {
      const amount = +tokenAmount * 10 ** stableUSDC.decimals;
      const url = `${quoteUrl}?inputMint=${stableUSDC.address}&outputMint=${
        token.address
      }&amount=${amount.toFixed(0)}`;
      const response = await fetch(url);
      const quoteResponse: QuoteResponse = await response.json();
      return {
        success: true,
        amount: `${+quoteResponse.outAmount / 10 ** token.decimals}`,
      };
    } catch (e) {
      return {
        success: false,
        message: "error fetching usdc value",
        amount: "0",
      };
    }
  }
  return { amount: `${+tokenAmount}`, success: true };
};
