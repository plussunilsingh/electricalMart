import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Make the base configurable via the VITE_BASE env var (useful for custom domains)
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/electricalMart/',
})
