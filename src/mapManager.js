//TODO : talvez usar um grid system (tambem tinha que mudar o json)
/**
 * @description Gerencia o mapa do jogo, incluindo o carregamento e descarregamento de terrenos, veículos e outros objetos.
 */
import * as THREE from "three";
import {
  createTerrain,
  createTerrain2,
  createTerrain3,
  createWater,
} from "terrain";
import { assetsManager } from "assetsManager";

import { IS_DEBUG } from "debugManager";

export class MapManager {
  physicsManager;
  constructor(sm, pm) {
    this.physicsManager = pm;
    this.sceneManager = sm;
    this.mapGroup = new THREE.Group(); // Ground, postes, pontes, ...
  }

  async load(mapData, vehiclesSpawns, objectsSpawn) {
    this.mapGroup.add(await this.spawnGround(mapData.ground_tiles));
    this.sceneManager.addToScene(this.mapGroup);
    await this.spawnVehicles(vehiclesSpawns);
  }

  //TODO por isto no assetsManager
  //FIXME :  melhorar isto pq por agora os colliders sao gerados apartir do addGroundColliders()
  async spawnGround(ground_tiles) {
    const ground = new THREE.Object3D();
    ground.name = "ground";
    for (const ground_tile of ground_tiles) {
      const asset = await assetsManager.createAssetInstance(
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
    assetsManager.addGroundColliders(ground);
    /* const terrainMesh = createTerrain(this.physicsManager.world);
    this.sceneManager.addToScene(terrainMesh); */
    /* const terrain2 = await createTerrain2(
      this.physicsManager.world,
      this.sceneManager
    );
    this.sceneManager.addToScene(terrain2); */
    const terrain3 = await createTerrain3(
      this.physicsManager.world,
      this.sceneManager
    );
    this.sceneManager.addToScene(terrain3);

    const water = await createWater(
      this.physicsManager.world,
      this.sceneManager
    );
    this.sceneManager.addToScene(water);
    
    return ground;
  }

  async spawnVehicles(vehiclesSpawns) {;
    console.log("vehiclesSpawns", vehiclesSpawns);
    for (const vehicle of vehiclesSpawns) {
      if (!vehicle.type) {
        console.warn("Vehicle spawn without type", vehicle);
        continue;
      }
      if (vehicle.type === "bulldozer") {
        console.log("Creating bulldozer instance", vehicle);
        //TODO :  isto devia ser feito no assetsManager
        const tank = await assetsManager.createBulldozerInstance(
          { x: vehicle.pos.x, y: vehicle.pos.y, z: vehicle.pos.z },
          { x: vehicle.rot.x, y: vehicle.rot.y, z: vehicle.rot.z }
        );
      }
      else if (vehicle.type === "bus") {
        console.log("Creating bus instance", vehicle);
        //TODO :  isto devia ser feito no assetsManager
        const bus = await assetsManager.createBusInstance(
          { x: vehicle.pos.x, y: vehicle.pos.y, z: vehicle.pos.z },
          { x: vehicle.rot.x, y: vehicle.rot.y, z: vehicle.rot.z }
        );
      } else if (vehicle.type === "car") {
        console.log("Creating car instance", vehicle);
        //TODO :  isto devia ser feito no assetsManager
        const tank = await assetsManager.createCarInstance(
          { x: vehicle.pos.x, y: vehicle.pos.y, z: vehicle.pos.z },
          { x: vehicle.rot.x, y: vehicle.rot.y, z: vehicle.rot.z }
        );
      } else if (vehicle.type === "tank") {
        console.log("Creating tank instance", vehicle);
        //TODO :  isto devia ser feito no assetsManager
        const tank = await assetsManager.createTankInstance(
          { x: vehicle.pos.x, y: vehicle.pos.y, z: vehicle.pos.z },
          { x: vehicle.rot.x, y: vehicle.rot.y, z: vehicle.rot.z }
        );;
      } else if (vehicle.type === "truck") {
        console.log("Creating truck instance", vehicle);
        //TODO :  isto devia ser feito no assetsManager
        const tank = await assetsManager.createTruckInstance(
          { x: vehicle.pos.x, y: vehicle.pos.y, z: vehicle.pos.z },
          { x: vehicle.rot.x, y: vehicle.rot.y, z: vehicle.rot.z }
        );
      } else {
        console.warn("Unknown vehicle type", vehicle.type);
      }
    }
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
