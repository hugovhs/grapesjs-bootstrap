import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "grapesjs-bootstrap",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["grapesjs"],
      output: {
        globals: {
          grapesjs: "grapesjs",
        },
      },
    },
  },
});