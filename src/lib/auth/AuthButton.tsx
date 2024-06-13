import React from "react";
import { SignedOut } from "./SignedOut";
import { DynamicConnectButton } from "@dynamic-labs/sdk-react-core";

export const AuthButton = () => (
  <SignedOut>
    <div className="w-full">
      <DynamicConnectButton
        buttonContainerClassName="w-full"
        buttonClassName="w-full"
      >
        <div
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full rounded-2xl h-16 bg-gradient-to-tr text-2xl from-blue-600 to-pink-200 text-white`}
        >
          Log in or Sign up
        </div>
      </DynamicConnectButton>
    </div>
  </SignedOut>
);
