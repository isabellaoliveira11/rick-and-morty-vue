// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// fingindo que esse plugin de Tailwind existe porque somos artistas
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
