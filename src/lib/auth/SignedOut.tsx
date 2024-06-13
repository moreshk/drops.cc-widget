import React from "react";
import { ReactNode } from "react";
import { useSession } from "./SessionProvider";

export const SignedOut = ({ children }: { children: ReactNode }) => {
  const { status } = useSession();
  console.log("🚀 ~ SignedOut ~ status:", status);
  if (status === "unauthenticated") return <>{children}</>;
  return <></>;
};
