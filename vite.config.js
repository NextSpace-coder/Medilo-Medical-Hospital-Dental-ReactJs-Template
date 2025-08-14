import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTagger from 'vite-tagger'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTagger({ prefixName: "wb" }),
  ],
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },
})
