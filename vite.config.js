import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ✅ Required for aliasing

export default defineConfig({
  base: "/My-Portfolio",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ Alias for "@/..." paths
    },
  },
})
