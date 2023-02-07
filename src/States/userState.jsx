import { create } from "zustand";

const id = sessionStorage.getItem("userId");
export const userStores = create((set) => ({
  user: [],
  value: fetch(
    `https://fejpqh9rn7.execute-api.us-east-1.amazonaws.com/user/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: sessionStorage.getItem("auth"),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      set({ user: data });
    }),
}));
