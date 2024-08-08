import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // Geben Sie hier den gewünschten Host an
    //port: 3137 // Optional: Ändern Sie den Port, wenn nötig
  }
})
