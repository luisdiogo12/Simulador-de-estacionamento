import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import { resolve } from 'path';

export default defineConfig({
  plugins: [wasm(), topLevelAwait()],
  build: {
    target: "esnext",
    sourcemap: true,
    rollupOptions: {
      // Garante que o Three.js e outras dependências sejam incluídas no build
      output: {
        manualChunks: {
          vendor: ["three", "@dimforge/rapier3d", "stats.js", "mitt"],
        },
      },
    },
  },
  server: {
    watch: {
      ignored: ["**/documents/**"],
    },
  },
  base: "/Simulador-de-estacionamento/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Atalho para a pasta src
      configs: resolve(__dirname, "src/configs"), // Atalho para a pasta configs
      //Debug
      debugManager: resolve(__dirname, "src/debug/debugManager.js"), // Atalho para a pasta debug
      rapierDebug: resolve(__dirname, "src/debug/RapierDebugRenderer.js"), // Atalho para a pasta debug
      GUIDebug: resolve(__dirname, "src/debug/GUIDebug.js"), // Atalho para a pasta debug
      //Managers
      eventBus: resolve(__dirname, "src/EventBus.js"), // Atalho para a pasta EventBus
      gameManager: resolve(__dirname, "src/gameManager.js"), // Atalho para a pasta levelsManager
      UIManager: resolve(__dirname, "src/UIManager.js"), // Atalho para a pasta UIManager
      physicsManager: resolve(__dirname, "src/physicsManager.js"), // Atalho para a pasta physicsManager
      sceneManager: resolve(__dirname, "src/sceneManager.js"), // Atalho para a pasta sceneManager
      mapManager: resolve(__dirname, "src/mapManager.js"), // Atalho para a pasta mapManager
      assetsManager: resolve(__dirname, "src/assetsManager.js"), // Atalho para a pasta assetsManager
      vehicleManager: resolve(__dirname, "src/vehiclesManager.js"), // Atalho para a pasta vehiclesManager
      //Map Objects
      terrain: resolve(__dirname, "src/assets/map/terrain.js"), // Atalho para a pasta terrain
      water: resolve(__dirname, "src/assets/map/water.js"), // Atalho para a pasta terrain
      road: resolve(__dirname, "src/assets/map/road.js"), // Atalho para a pasta road
      //Obstacles
      rock: resolve(__dirname, "src/assets/obstacles/rock.js"), // Atalho para a pasta rock
      tree: resolve(__dirname, "src/assets/obstacles/tree.js"), // Atalho para a pasta tree
      //Vehicles
      bulldozer: resolve(__dirname, "src/assets/vehicles/bulldozer.js"), // Atalho para a pasta bulldozer
      bus: resolve(__dirname, "src/assets/vehicles/bus.js"), // Atalho para a pasta bus
      car: resolve(__dirname, "src/assets/vehicles/car.js"), // Atalho para a pasta car
      tank: resolve(__dirname, "src/assets/vehicles/tank.js"), // Atalho para a pasta tank
      truck: resolve(__dirname, "src/assets/vehicles/truck.js"), // Atalho para a pasta truck
    },
  },
});