import { defineConfig, Plugin } from 'vite';
import { resolve } from 'path';
import { existsSync, mkdirSync, cpSync } from 'fs';

function syncAssetsPlugin(): Plugin {
  const syncAssets = () => {
    const srcDir = resolve(__dirname, 'assets');
    const publicDir = resolve(__dirname, 'public/assets');
    if (existsSync(srcDir)) {
      mkdirSync(publicDir, { recursive: true });
      cpSync(srcDir, publicDir, { recursive: true });
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
        pro: resolve(__dirname, 'pages/pro.html'),
      },
    },
  },
});

