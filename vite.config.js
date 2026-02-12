import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: 'vercel.json', dest: '.' }]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  build: {
    // On augmente la limite de l'avertissement pour qu'il arrête de t'embêter (10Mo)
    chunkSizeWarningLimit: 10000, 
    
    // C'est ici que la magie opère pour découper le code
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Si le code vient de node_modules (les outils installés), on le met à part
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  }
})