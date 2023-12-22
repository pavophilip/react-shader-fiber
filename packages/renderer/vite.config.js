import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      name: "RSFRenderer",
      fileName: "rsf-renderer",
    },
    rollupOptions: {
      external: ["react-reconciler"],
      output: {},
    },
  },
});
