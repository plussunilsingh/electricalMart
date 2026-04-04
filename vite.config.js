import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Make the base configurable via the VITE_BASE env var (useful for custom domains)
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 8000,
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
