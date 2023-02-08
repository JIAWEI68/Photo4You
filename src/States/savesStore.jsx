import { create } from "zustand";

export const saveStore = create((set) => ({
    saveCheck: true,
    setSaveCheck: (value) => set({ saveCheck: value}),
}));