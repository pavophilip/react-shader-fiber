import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "RSFStdlib",
      fileName: "rsf-stdlib",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },

  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
});
