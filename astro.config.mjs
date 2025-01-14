// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8881,
  },

  adapter: node({
    mode: "standalone",
  }),
});