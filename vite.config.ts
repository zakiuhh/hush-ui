import { defineConfig, Plugin } from 'vite';
import { resolve } from 'path';
import { existsSync, mkdirSync, copyFileSync, readdirSync } from 'fs';

function syncAssetsPlugin(): Plugin {
  const syncAssets = () => {
    const srcDir = resolve(__dirname, 'assets');
    const publicDir = resolve(__dirname, 'public/assets');
    if (existsSync(srcDir)) {
      mkdirSync(publicDir, { recursive: true });
      for (const file of readdirSync(srcDir)) {
        copyFileSync(resolve(srcDir, file), resolve(publicDir, file));
      }
    }
  };

  return {
    name: 'sync-assets-plugin',
    buildStart() {
      syncAssets();
    },
    configureServer() {
      syncAssets();
    },
  };
}

export default defineConfig({
  plugins: [syncAssetsPlugin()],
  build: {
    outDir: 'dist-docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        components: resolve(__dirname, 'pages/components.html'),
        sections: resolve(__dirname, 'pages/sections.html'),
      },
    },
  },
});

