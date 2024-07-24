import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";

export default defineConfig({
  plugins: [
    nunjucks({
      templatesDir: "src/templates",
    }),
  ],
  build: {
    rollupOptions: {
      input: "src/templates/index.njk",
    },
  },
});
