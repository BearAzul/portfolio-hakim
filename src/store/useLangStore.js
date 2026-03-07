import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLangStore = create(
  persist(
    (set) => ({
      lang: "id",
      setLang: (newLang) => {
        set({ lang: newLang });
        document.cookie = `googtrans=/id/${newLang}; path=/`;
        document.cookie = `googtrans=/id/${newLang}; domain=${window.location.hostname}; path=/`;
      },
    }),
    { name: "app-language-storage" }
  )
);
