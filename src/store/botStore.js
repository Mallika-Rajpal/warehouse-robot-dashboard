import { create } from "zustand";

export const useBotStore = create((set) => ({
  bots: [],

  setBots: (bots) => set({ bots }),
}));
