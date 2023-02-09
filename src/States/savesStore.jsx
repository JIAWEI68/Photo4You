import { create } from "zustand";

export const saveStore = create((set) => ({
    saveCheck: true,
    setSaveCheck: () => set((state) => ({ saveCheck: !state.saveCheck })),
}));