import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      // Unique global name for this remote. The host refers to it by this name.
      name: 'remoteApp',
      // The manifest file this build produces. Hosts download it first.
      filename: 'remoteEntry.js',
      // What this app makes available to others: "public path" -> local file.
      exposes: {
        './Button': './src/components/Button.tsx',
        './Login': './src/pages/Login.tsx',
        './About': './src/pages/About.tsx',
      },
      // Vite's root tsconfig.json only holds references; JSX settings live in tsconfig.app.json.
      dts: { tsConfigPath: './tsconfig.app.json' },
      // Libraries loaded only once and shared with the host instead of bundled twice.
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
  server: { port: 5001, strictPort: true, origin: 'http://localhost:5001' },
  preview: { port: 5001, strictPort: true },
  build: { target: 'esnext' },
})
