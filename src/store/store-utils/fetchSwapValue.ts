import { quoteUrl } from "@/config/url";
import { solToken } from "@/utils/defaultTokens";
import { QuoteResponse } from "@jup-ag/api";

export const fetchSwapValue = async (
  sendToken: CompleteToken,
  receiveToken: CompleteToken,
  tokenAmount: string
) => {
  if (+tokenAmount > 0) {
    try {
      const amount = +tokenAmount * 10 ** sendToken.decimals;
      const url = `${quoteUrl}?inputMint=${sendToken.address}&outputMint=${
        receiveToken.address
      }&amount=${amount.toFixed(0)}&platformFeeBps=100&slippageBps=2000`;
      const response = await fetch(url);
      const quoteResponse: QuoteResponse = await response.json();
      if (receiveToken.address === solToken.address) {
        return {
          success: true,
          amount: `${+quoteResponse.outAmount / 10 ** receiveToken.decimals}`,
        };
      } else {
        return {
          success: true,
          amount: `${+quoteResponse.outAmount / 10 ** receiveToken.decimals}`,
        };
      }
    } catch (e) {
      return {
        success: false,
        message: "error fetching token value",
        amount: "0",
      };
    }
  }
  return { amount: (+tokenAmount).toFixed(2), success: true };
};
