import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test-setup/setup.js', // assuming the test folder is in the root of our project
  }
})
