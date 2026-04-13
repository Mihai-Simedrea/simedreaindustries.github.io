import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// IMPORTANT: base trebuie să fie numele exact al repo-ului pe GitHub
// Repository: simedreaindustries.github.io → se servește de la rădăcină (/)
// Dacă era un repo normal (ex. "website"), ar fi trebuit '/website/'
export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
