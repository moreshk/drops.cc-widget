import { create } from "zustand";
import { produce } from "immer";
import { createSelectors } from "./create-selectors";
import { TabEnum } from "@/store/store-types";

export interface TabState {
  tabName: TabEnum;
  onTabChange: (tab: TabEnum) => void;
}

export const useTabStore = create<TabState>()((set, get) => ({
  tabName: TabEnum.swap,
  onTabChange: (tabValue) => {
    set(
      produce((state: TabState) => {
        state.tabName = tabValue;
      })
    );
  },
}));

export const useTabStoreSelectors = createSelectors(useTabStore);
