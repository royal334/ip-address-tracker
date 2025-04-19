import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react(), tailwindcss()],
    define: {
      // Make environment variables accessible in the client-side code
      'process.env': env,
    },
  }
})
