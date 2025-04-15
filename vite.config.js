import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        wasm(), 
        topLevelAwait()
    ],
    build: {
        target: 'esnext',
        sourcemap: true,
        rollupOptions: {
            // Garante que o Three.js e outras dependências sejam incluídas no build
            output: {
                manualChunks: {
                    'vendor': ['three', '@dimforge/rapier3d', 'stats.js']
                }
            }
        }
    },
    server: {
        watch: {
          ignored: ['**/documents/**']
        }
    },
    base: '/Simulador-de-estacionamento',
});