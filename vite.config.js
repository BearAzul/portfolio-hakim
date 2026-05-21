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
  assetsInclude: ["**/*.zip", "**/*.pdf", "**/*.lottie"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://portfolio-manage.vercel.app",
        changeOrigin: true,
      },
    },
  },
});
