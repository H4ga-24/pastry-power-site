import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'vercel.json',
          dest: '.'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  build: {
    // On augmente la limite à 1000ko (1Mo) pour éviter l'avertissement
    chunkSizeWarningLimit: 1000,
  }
})