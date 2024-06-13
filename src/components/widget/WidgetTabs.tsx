import { useSession } from "@/lib/auth/SessionProvider";
import { useTabStoreSelectors } from "@/store/tab-store";
import { useTradeStoreSelectors } from "@/store/trade-store";
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignedIn } from "@/lib/auth/SignedIn";
import { Deposit } from "../deposit/deposit";
import { AuthButton } from "@/lib/auth/AuthButton";
import { SignedOut } from "@/lib/auth/SignedOut";
import { getBaseURL } from "@/config/url";
import { TabEnum } from "@/store/store-types";

export const WidgetTabs = ({
  tokens,
  widget,
}: {
  tokens: CompleteToken[];
  widget: CompleteWidget;
}) => {
  const tabChange = useTabStoreSelectors.use.onTabChange();
  const tabName = useTabStoreSelectors.use.tabName();
  const setReceiveToken = useTradeStoreSelectors.use.setReceiveToken();
  const { session } = useSession();
  const swapTab = () => tabChange(TabEnum.swap);
  const buyTab = () => tabChange(TabEnum.deposit);
  const walletTab = () => tabChange(TabEnum.wallet);

  useEffect(() => {
    setReceiveToken(widget.token);
  }, []);

  return (
    <div className="grid max-w-lg mx-auto bg-primary-foreground rounded-2xl w-full z-50">
      <div className="flex flex-col">
        <header className="flex items-center gap-4 px-4 py-2 border-b">
          <div className="flex items-center gap-2 font-semibold">
            <img
              src={`${getBaseURL()}/dropz-log.png`}
              className="w-24 h-12"
              alt="logo"
            />
          </div>
          <div className="flex-1"></div>
          <SignedIn>user</SignedIn>
        </header>
        <div className="flex justify-center items-center">
          <Tabs
            defaultValue="swap"
            value={tabName}
            className="max-w-lg w-full p-4 min-h-[600px]"
          >
            <TabsList className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none p-0 bg-transparent">
              <TabsTrigger
                onClick={swapTab}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-black relative h-9 border-b-2 border-b-transparent bg-transparent px-4 py-2 font-semibold text-muted-foreground shadow-none transition-none rounded-full  data-[state=active]:text-foreground data-[state=active]:shadow-none"
                value="swap"
              >
                Swap
              </TabsTrigger>
              <TabsTrigger
                onClick={buyTab}
                value="deposit"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-black relative h-9 border-b-2 border-b-transparent bg-transparent px-4 py-2 font-semibold text-muted-foreground shadow-none transition-none rounded-full  data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Deposit
              </TabsTrigger>
              <TabsTrigger
                onClick={walletTab}
                value="wallet"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-black relative h-9 border-b-2 border-b-transparent bg-transparent px-4 py-2 font-semibold text-muted-foreground shadow-none transition-none rounded-full  data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Wallet
              </TabsTrigger>
            </TabsList>
            <TabsContent value="deposit">
              <div className="border p-4 rounded-xl mt-6">
                <SignedIn>
                  <Deposit />
                </SignedIn>
                <SignedOut>
                  <AuthButton />
                </SignedOut>
              </div>
            </TabsContent>
            <TabsContent value="swap">
              <div className="mt-6">
                show trade widget
                <AuthButton />
                {/* <TradeWidget widget={widget} tokens={tokens} /> */}
              </div>
            </TabsContent>
            <TabsContent value="wallet">
              <div className="border rounded-xl mt-6">
                <SignedIn>show token detials</SignedIn>
                <SignedOut>
                  <div className="p-4">
                    <AuthButton />
                  </div>
                </SignedOut>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
