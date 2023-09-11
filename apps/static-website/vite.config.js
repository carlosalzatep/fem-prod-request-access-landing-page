import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const ENV_DEV = 'development';

module.exports = defineConfig(({ mode }) => ({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      generateScopedName:
        mode === ENV_DEV ? '[name]__[local]' : '[hash:base64]',
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
}));
