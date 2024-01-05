import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import { resolve } from 'path';
// import * as url from 'url';
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const COMPONENTS_PATH = resolve('../components/src/lib');

const config = defineConfig({
  integrations: [svelte()],
  vite: {
    resolve: {
      alias: [
        {
          find: /\@(components|ui)/,
          replacement: () => `${COMPONENTS_PATH}/`,
        }
      ]
    }
  }
});

// https://astro.build/config
export default config;
