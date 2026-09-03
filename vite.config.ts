import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        components: resolve(__dirname, 'pages/components.html'),
        sections: resolve(__dirname, 'pages/sections.html'),
      },
    },
  },
});
