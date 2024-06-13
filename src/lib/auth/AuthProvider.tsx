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
        environmentId: "e25de024-4234-485b-aaff-a113f1cb5ba3",
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
