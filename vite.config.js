import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/react/main.tsx',
      refresh: true,
    }),
    react(),
  ],
  server: {
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "./resources/react")}/`,
      "~/": `${path.resolve(__dirname, "./public")}/`,
      "~bootstrap/": `${path.resolve(__dirname, "./node_modules/bootstrap/scss")}/`,
    },
  },
});
