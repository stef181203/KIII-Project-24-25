import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

if (!window.SERVER_PORT) {
  console.warn("window.SERVER_PORT is not defined. Falling back to default.");
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: window.SERVER_PORT || 3000,
  },
})
