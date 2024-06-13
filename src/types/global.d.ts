declare global {
  type CompleteToken = {
    symbol: string;
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    address: string;
    decimals: number;
    imageUrl: string;
    coingeckoId: string | null;
    chainId: number;
  };
  type Session = {
    user: User;
    expires: Date;
  };

  type User = {
    id: string;
    walletAddress: string;
    userType: string;
  };

  type SessionLoadingType = "authenticated" | "unauthenticated" | "loading";

  type CompleteWidget = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    feeWalletAddress: string;
    feePercentage: number;
    website: string | null;
    tokenId: string;
    token: CompleteToken;
  };
}

export {};
