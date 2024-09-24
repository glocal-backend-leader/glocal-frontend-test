import { defineConfig } from 'astro/config';

import icon from "astro-icon";

import alpinejs from "@astrojs/alpinejs";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  adapter: node({
    mode: "standalone"
  }),
  integrations: [alpinejs(), icon(), tailwind()],
  output: 'server',
  prefetch: {
    defaultStrategy: 'tap'
  },
  security: {
    checkOrigin: true
  },
  site: 'http://localhost:4321'
});