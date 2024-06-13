import React from "react";
import { getBaseURL } from "@/config/url";

export const WidgetLoading = () => {
  return (
    <div className="grid max-w-lg mx-auto bg-primary-foreground rounded-2xl w-full z-50 border-2">
      <div className="flex flex-col">
        <header className="flex items-center gap-4 px-4 py-2 border-b">
          <div className="flex items-center gap-2 font-semibold">
            <img
              src={`${getBaseURL()}/dropz-log.png`}
              className="w-24 h-12"
              alt="logo"
            />
          </div>
        </header>
        <div className="flex justify-center items-center">
          <div className="max-w-lg w-full p-4 min-h-[600px]">
            <div className="flex gap-4">
              <div className="w-20 h-8 rounded-full animate-pulse bg-zinc-800" />
              <div className="w-20 h-8 rounded-full animate-pulse bg-zinc-800" />
              <div className="w-20 h-8 rounded-full animate-pulse bg-zinc-800" />
            </div>
            <div className="border mt-7 rounded-2xl p-4">
              <div className="w-28 h-5 animate-pulse bg-zinc-800 rounded-full" />
              <div className="w-full h-16 animate-pulse bg-zinc-800 rounded-xl mt-3 mb-2" />
              <div className="flex items-center gap-2">
                <div className="w-14 h-6 rounded-full animate-pulse bg-zinc-800" />
                <div className="w-14 h-6 rounded-full animate-pulse bg-zinc-800" />
                <div className="w-14 h-6 rounded-full animate-pulse bg-zinc-800" />
                <div className="w-14 h-6 rounded-full animate-pulse bg-zinc-800" />
                <div className="w-14 h-6 rounded-full animate-pulse bg-zinc-800" />
              </div>
              <div className="mt-7">
                <div className="flex justify-between items-center">
                  <div className="w-28 h-5 animate-pulse bg-zinc-800 rounded-full" />
                  <div className="w-20 h-3 animate-pulse bg-zinc-800 rounded-full" />
                </div>
                <div className="w-full h-[70px] border rounded-xl mt-3 mb-2 flex justify-between items-center px-3">
                  <div className="w-24 h-10 rounded-xl animate-pulse bg-zinc-800" />
                </div>
              </div>
              <div className="mt-7">
                <div className="flex justify-between items-center">
                  <div className="w-28 h-5 animate-pulse bg-zinc-800 rounded-full" />
                  <div className="w-20 h-3 animate-pulse bg-zinc-800 rounded-full" />
                </div>
                <div className="w-full h-[70px] border rounded-xl mt-3 mb-2 flex justify-between items-center px-3">
                  <div className="w-24 h-10 rounded-xl animate-pulse bg-zinc-800" />
                </div>
              </div>
              <div className="w-full h-16 animate-pulse bg-zinc-800 rounded-xl mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
