import React from "react";
import { ReactNode } from "react";
import { useSession } from "./SessionProvider";

export const SignedIn = ({ children }: { children: ReactNode }) => {
  const { status } = useSession();
  if (status === "authenticated") return <>{children}</>;
  return <></>;
};
