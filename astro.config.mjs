import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "path";

export default defineConfig({
  srcDir: "./src",
  publicDir: "./public",
  outDir: "./dist",
  output: "static", // Change to "server" or "hybrid" for SSR
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
  },
});
