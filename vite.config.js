import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { partytownVite } from "@qwik.dev/partytown/utils";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    partytownVite({
      dest: path.join(__dirname, "public", "~partytown"),
    }),
  ],
  assetsInclude: ["**/*.zip", "**/*.pdf"],
});
