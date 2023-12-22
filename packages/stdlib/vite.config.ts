// @ts-expect-error path import
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // @ts-expect-error cwd
      entry: resolve(process.cwd(), "src/main.ts"),
      name: "RSF",
      fileName: "rsf-stdlib",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
