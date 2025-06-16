import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { partytownVite } from "@qwik.dev/partytown/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    partytownVite({
      dest: "public/~partytown",
    }),
  ],
  assetsInclude: ["**/*.zip", "**/*.pdf"],
});
