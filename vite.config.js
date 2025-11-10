import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { partytownVite } from "@qwik.dev/partytown/utils";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],
  assetsInclude: ["**/*.zip", "**/*.pdf"],
  server: {
    port:3000,
    proxy: {
      "/api": {
        target: "https://portfolio-manage.vercel.app",
        changeOrigin: true,
      },
    },
  },
});
