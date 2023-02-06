import create from "zustand";

export const useStore = create((set) => ({
    searchValue: "",
    setSearchValue: (value) => set({ searchValue: value }),
}));