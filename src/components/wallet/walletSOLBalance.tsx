import React from "react";
import { useSession } from "@/lib/auth/SessionProvider";
import { cacheImage } from "@/utils/cacheImage";
import { solToken } from "@/utils/defaultTokens";

export const WalletSOLBalance = () => {
  const { session } = useSession();

  const balance = 2;

  return (
    <div>
      <div className="flex gap-1 border rounded-full py-1.5 px-3 items-center">
        <img
          className="rounded-full w-5 h-5"
          src={cacheImage(solToken.imageUrl)}
          alt="sol token image"
        />
        {typeof balance === "number" ? (
          <p className="text-sm">
            {(balance ? balance / 10 ** solToken.decimals : 0).toFixed(4)}
          </p>
        ) : (
          <div className="w-10 h-4 rounded-full bg-background animate-pulse" />
        )}
      </div>
    </div>
  );
};
