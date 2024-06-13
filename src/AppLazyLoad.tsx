import React from "react";
import { AuthProvider } from "./lib/auth/AuthProvider";
import { SessionProvider } from "./lib/auth/SessionProvider";
import { SWRConfig } from "swr";
import { Widget } from "./components/widget/widget";
import { fetcher } from "./config/axios";

export default function AppLazyLoad() {
  return (
    <SWRConfig value={{ fetcher }}>
      <SessionProvider>
        <AuthProvider>
          <Widget />
        </AuthProvider>
      </SessionProvider>
    </SWRConfig>
  );
}
