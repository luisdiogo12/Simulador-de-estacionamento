//TODO : talvez usar um grid system (tambem tinha que mudar o json)

import * as THREE from 'three';
import { createAssetInstance } from './assets.js';
import { PhysicsManager } from './physicsManager.js';
import mapData from './configs/map.json';
import vehiclesData from './configs/vehicles.json';


// TODO : alterar para "import { IS_DEBUG, initDebugListener, updateDebugStats } from './debug.js';" quando o debbuger estiver pronto
export const IS_DEBUG = import.meta.env.DEV; // true em desenvolvimento, false em produção

export class MapManager {
  constructor(sceneManager, physicsManager) {
    this.sceneManager = sceneManager;
    this.physicsManager = physicsManager;
    this.mapGroup = new THREE.Group(); // Ground, postes, pontes, ...
    this.vehiclesGroup = new THREE.Group(); // veiculos
    this.vehiclesGroup.name = 'vehicles';
    this.physicsBodies = []; // Armazena referências aos corpos físicos
    if (IS_DEBUG) {
                
    }
  }

  async load() {
    this.mapGroup.add(await this.spawnGround());
    this.sceneManager.addToScene(this.mapGroup);
    this.vehiclesGroup.add(await this.spawnVehicles());
    this.sceneManager.addToScene(this.vehiclesGroup);
  }

  async spawnGround() {
    const ground = new THREE.Object3D();
    ground.name = 'ground';
    for (const ground_tile of mapData.ground_tiles) {
      const asset = await createAssetInstance(
        ground_tile.type,
        ground_tile.position.x,
        ground_tile.position.y,
        ground_tile.position.z,
        ground_tile.rotation
      );
      if (asset) {
        asset.name = ground_tile.type;
        ground.add(asset);
      }
    }
    this.physicsManager.addGround(ground);
    return ground;
  }

  async spawnVehicles () {
    const vehicles = new THREE.Object3D();
    vehicles.name = 'vehicles';
    for (const vehicle of vehiclesData.vehicles) {
      const asset = await createAssetInstance(
        vehicle.type,
        vehicle.position.x,
        vehicle.position.y,
        vehicle.position.z,
        vehicle.rotation,
        vehicle.scale
      );
      if (asset) {
        asset.name = vehicle.type;
        vehicles.add(asset);
        this.physicsManager.addCar(asset);
      }
    }
    return vehicles;
  }

  unload() {
    /*this.physicsBodies.forEach(body => {
      this.physicsManager.world.removeRigidBody(body);
    });
    this.sceneManager.removeFromScene(this.mapGroup);
    this.mapGroup.clear(); // Limpa todos os objetos filhos
    this.physicsBodies = [];*/
  }
}