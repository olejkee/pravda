const { resolve } = require('path');
const { defineConfig } = require('vite');
const { viteStaticCopy } = require('vite-plugin-static-copy');

module.exports = defineConfig({
  root: 'src',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    manifest: true, // пусть лежит, пригодится при натяжке
    assetsDir: '',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        // catalog: resolve(__dirname, 'src/catalog.html'),
      },
    },
  },

  plugins: [
    viteStaticCopy({
      targets: [
        { src: resolve(__dirname, 'src/media'), dest: 'media' },
      ],
    }),
  ],
});