import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'Client',
  build: {
    outDir: 'build',
    rollupOptions: {
      input: './Client/public/index.html',
    },
  },
  plugins: [react()],
});