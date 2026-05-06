import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  tailwindcss: {
    config: {
      purge: ['./index.html', './src/**/*.{js,jsx}'],
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    },
  },  
})
