import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// GitHub Pages base path. Repo name: spiritual-insight-web
export default defineConfig({
  base: "/spiritual-insight-web/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
  },
  build: {
    outDir: "dist",
  },
});
