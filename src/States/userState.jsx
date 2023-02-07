import { create } from "zustand";

const id = sessionStorage.getItem("userId");
export const userStores = create(async (set) => ({
  user: [],
  setUser: (value) => set({ user: value }),
}));
