import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// IMPORTANT: change `base` to match your GitHub repo name.
// Site will be served at https://<user>.github.io/spiritual-insight-web/
export default defineConfig({
  base: "/spiritual-insight-web/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
