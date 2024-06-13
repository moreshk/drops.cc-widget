import React from "react";
import { Check, Copy, CreditCard } from "lucide-react";
import { useState } from "react";
import { useFunding } from "@dynamic-labs/sdk-react-core";
import { useSession } from "@/lib/auth/SessionProvider";

export const Deposit = () => {
  const [copied, setCopied] = useState(false);
  const { session } = useSession();
  const walletAddress = session?.user?.walletAddress;
  const { enabled, openFunding } = useFunding();

  const copy = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <div className="grid gap-7 w-full">
      <h1 className="text-center text-balance font-bold">
        Deposit Some SOL To Get Started
      </h1>
      <div>
        <h1 className="font-semibold uppercase text-center text-sm">
          Deposit SOL
        </h1>
        <div className="border border-gray-400 rounded-2xl py-5 px-2 mt-2">
          <p className="text-center text-balance text-sm max-w-sm mx-auto">
            Send SOL from a CEX or another wallet to your Dropz account.
          </p>
          <div className="mt-5">
            {walletAddress && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={copy}
                  className={
                    "text-xs font-medium break-all border text-balance rounded-lg p-3"
                  }
                >
                  {walletAddress}
                </button>
                <button
                  onClick={copy}
                  className="flex-shrink-0 border p-3 rounded-lg"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="font-semibold uppercase text-center text-sm mb-2">
            BUY SOL WITH CREDIT/DEBIT CARD
          </p>
          <button
            disabled={!enabled}
            onClick={() => {
              if (session?.user.walletAddress) {
                openFunding({
                  token: "SOL",
                  address: session?.user.walletAddress,
                });
              }
            }}
            className="p-5 rounded-2xl flex flex-col justify-center items-center text-lg text-center space-y-3 border w-full border-gray-400"
          >
            <p className=" max-w-xs text-center mx-auto text-balance text-sm">
              Buy SOL with your credit card or debit card.
            </p>
            <CreditCard className="w-20 h-20" />
          </button>
        </div>
      </div>
    </div>
  );
};
