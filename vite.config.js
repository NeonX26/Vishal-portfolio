import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  base: "/Vishal-portfolio",
  server: {
    port: 3000,
    host: '192.168.29.144'
  },
})
