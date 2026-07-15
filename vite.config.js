
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // تأكدي من السطر ده

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // وتأكدي إنه مضاف هنا
})
