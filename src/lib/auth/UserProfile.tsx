import React from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { WalletSOLBalance } from "@/components/wallet/walletSOLBalance";

export const UserProfile = () => {
  const { setShowDynamicUserProfile } = useDynamicContext();

  return (
    <button onClick={() => setShowDynamicUserProfile(true)}>
      <WalletSOLBalance />
    </button>
  );
};
