<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-dev/', // your repo name
  build: {
    outDir: 'docs' // build output goes to docs folder
  }
});
>>>>>>> 9154f23b4c897f619cb7828ee9beb56f2054df44
