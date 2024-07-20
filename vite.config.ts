/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: ['./vitest.setup.ts']
  }
})
