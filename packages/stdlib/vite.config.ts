// @ts-expect-error path import
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // @ts-expect-error cwd
      entry: resolve(__dirname, "src/main.ts"),
      name: "RSFStdlib",
      fileName: "rsf-stdlib",
    },
    rollupOptions: {
      external: ["react", 'react-dom'],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
