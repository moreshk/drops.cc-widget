import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { addressShortener } from "@/utils/addressShortener";
import { CircleCheck, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useDebounce } from "@uidotdev/usehooks";
import { FixedSizeList as List } from "react-window";
import { cacheImage } from "@/utils/cacheImage";

const TokenListModal = ({
  open,
  onChange,
  tokens,
  onTokenChange,
  selectedToken,
}: {
  open: boolean;
  onChange: (value: boolean) => void;
  tokens: CompleteToken[];
  onTokenChange: (token: CompleteToken) => void;
  selectedToken: CompleteToken;
}) => {
  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 300);
  const [results, setResults] = useState<CompleteToken[]>([]);
  const { width } = useWindowSize();

  useEffect(() => {
    if (debouncedSearchTerm) {
      const searchToken = search
        ? tokens.filter((token) => {
            return (
              token.address === search ||
              token.symbol.toLowerCase().includes(search.toLowerCase()) ||
              search.toLowerCase().includes(token.symbol.toLowerCase())
            );
          })
        : tokens;
      setResults(searchToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const updatedToken = debouncedSearchTerm ? results : tokens;

  if (width && 1024 < width) {
    return (
      <div className="hidden lg:block">
        <Dialog open={open} onOpenChange={onChange}>
          <DialogContent className="sm:max-w-[425px]">
            <div>
              <div className="p-2 flex items-center gap-2">
                <Search values={search} />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by token or paste address"
                  className="flex h-10 w-full rounded-md bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none"
                />
                <button onClick={() => onChange(false)}>
                  <X />
                </button>
              </div>
              <List
                height={384}
                itemCount={updatedToken.length}
                itemSize={65}
                layout="vertical"
                width={365}
                className="no-scrollbar"
                itemData={updatedToken}
              >
                {({ data, index, style }) => {
                  const token = data[index];
                  return (
                    <div style={style}>
                      <button
                        onClick={() => {
                          onTokenChange(token);
                          onChange(false);
                        }}
                        className={`flex items-center justify-between my-2 rounded-2xl p-2 cursor-pointer w-full ${
                          token.address === selectedToken.address
                            ? "bg-secondary"
                            : ""
                        } hover:bg-secondary`}
                        key={token.id}
                      >
                        <div className="w-full">
                          <div className="flex gap-2 items-center">
                            <img
                              src={cacheImage(token.imageUrl)}
                              alt="logo"
                              className="w-9 h-9 rounded-full"
                            />
                            <div>
                              <div className="flex gap-1 items-center">
                                <div>{token.symbol}</div>
                                <p className="text-xs opacity-60 bg-secondary px-1 py-0.5 rounded-md flex justify-center items-center gap-2">
                                  {addressShortener(token.address)}
                                </p>
                              </div>
                              <p className="text-xs text-left opacity-40">
                                {token.name}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          {token.address === selectedToken.address && (
                            <CircleCheck className="w-5 h-5" />
                          )}
                        </div>
                      </button>
                    </div>
                  );
                }}
              </List>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  return (
    <Drawer open={open} onClose={() => onChange(false)}>
      <DrawerContent>
        <div>
          <div className="py-2 px-8 flex items-center gap-2">
            <Search values={search} />
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by token or paste address"
              className="flex h-10 w-full rounded-md bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none"
            />

            <button onClick={() => onChange(false)}>
              <X />
            </button>
          </div>
          <List
            height={384}
            itemCount={updatedToken.length}
            itemSize={65}
            layout="vertical"
            width={width ? width - 64 : 360}
            className="no-scrollbar mx-8"
            itemData={updatedToken}
          >
            {({ data, index, style }) => {
              const token = data[index];
              return (
                <div style={style}>
                  <button
                    onClick={() => {
                      onTokenChange(token);
                      onChange(false);
                    }}
                    className={`flex items-center justify-between my-2 rounded-2xl p-2 cursor-pointer w-full ${
                      token.address === selectedToken.address
                        ? "bg-secondary"
                        : ""
                    } hover:bg-secondary`}
                    key={token.id}
                  >
                    <div className="w-full">
                      <div className="flex gap-2 items-center">
                        <img
                          src={cacheImage(token.imageUrl)}
                          alt="logo"
                          className="w-9 h-9 rounded-full"
                        />
                        <div>
                          <div className="flex gap-1 items-center">
                            <div>{token.symbol}</div>
                            <p className="text-xs opacity-60 bg-secondary px-1 py-0.5 rounded-md flex justify-center items-center gap-2">
                              {addressShortener(token.address)}
                            </p>
                          </div>
                          <p className="text-xs text-left opacity-40">
                            {token.name}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      {token.address === selectedToken.address && (
                        <CircleCheck className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                </div>
              );
            }}
          </List>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default TokenListModal;
