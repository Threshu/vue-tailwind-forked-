import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      base: "/",
      plugins: [vue()],
    };
  } else {
    return {
      base: "/build/",
      publicDir: false,
      build: {
        manifest: true,
        outDir: "build",
        rollupOptions: {
          input: "./main.js",
        },
        polyfillModulePreload: false,
      },
      plugins: [vue()],
    };
  }
});
