import React, { ReactNode } from "react";
import {
  DynamicContextProvider,
  DynamicUserProfile,
} from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { useSession } from "./SessionProvider";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { session, logout } = useSession();
  return (
    <DynamicContextProvider
      theme="auto"
      settings={{
        environmentId: "59c1b683-fdab-47aa-8a6c-e2b053838e84",
        walletConnectors: [SolanaWalletConnectors],
        events: {
          onLogout: async (event) => {
            try {
              if (session?.user.id) {
                logout();
              }
            } catch (e) {
              console.log(e);
            }
          },
        },
      }}
    >
      {children}
      <DynamicUserProfile />
    </DynamicContextProvider>
  );
};
