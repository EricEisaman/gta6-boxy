import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/gta6-boxy/',
  server: {
    host: '127.0.0.1',
  },
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 4000,
  },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
  },
});
