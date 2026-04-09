import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: 'vercel.json', dest: '.' }],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  build: {
    // Limite par défaut (500 ko) — si un chunk dépasse cette taille après correction,
    // c'est un signal qu'il reste des eager imports à corriger.
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        manualChunks(id) {
          // Les dépendances npm dans un chunk "vendor" stable (bon pour le cache navigateur)
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Les recettes et pages technologie sont automatiquement découpées par Vite
          // grâce aux import.meta.glob sans eager:true dans DynamicPage, SearchModal
          // et PatisseriePage. Aucune configuration manuelle nécessaire ici.
        },
      },
    },
  },
});