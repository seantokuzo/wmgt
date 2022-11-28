import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5150,
    strictPort: true,
    https: false,
    open: true
  },
  plugins: [react(), tsconfigPaths()]
})
