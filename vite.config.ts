import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/mqa-demo/',
  plugins: [
    remix({
      basename: '/mqa-demo/',
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});