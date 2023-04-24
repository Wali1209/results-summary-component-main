import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/results-summary-component-main/', //Adding base is part of deploying app to gh-pages
  plugins: [react()],
})
