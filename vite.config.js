import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prismjs from "vite-plugin-prismjs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/morsepiippari/",
  plugins: [
    react(),
    prismjs({
      languages: "all",
      plugins: ["file-highlight", "line-numbers"],
      theme: "tomorrow",
      css: "true",
    }),
  ],
});
