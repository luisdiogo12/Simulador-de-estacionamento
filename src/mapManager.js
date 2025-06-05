/**
 * @description Gerencia o mapa do jogo, incluindo o carregamento e descarregamento de terrenos, veículos e outros objetos.
 */
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { createTerrain } from "terrain";
import { createWater } from "water";
import { assetsManager } from "assetsManager";
import {createInstancedRocks} from "rocks";
import { createInstancedTrees } from "trees";

import { IS_DEBUG } from "debugManager";

export class MapManager {
  physicsManager;
  constructor(sm, pm) {
    this.physicsManager = pm;
    this.sceneManager = sm;
    this.mapGroup = new THREE.Group(); // Ground, postes, pontes, ...
    this.mapGroup.name = "mapGroup";
    this.terrainGroup = new THREE.Group(); // Terrain, water, ...
    this.terrainGroup.name = "terrainGroup";
    this.roadGroup = new THREE.Group(); // Roads, ...
    this.roadGroup.name = "roadGroup";
    this.objectsGroup = new THREE.Group(); // Obstacles, trees, rocks, ...
    this.objectsGroup.name = "objectsGroup";
    this.obstaclesGroup = new THREE.Group(); // Obstacles, trees, rocks, ...
    this.obstaclesGroup.name = "obstaclesGroup";
  }

  async load(mapData, vehiclesSpawns, objectsSpawn) {
    this.mapGroup.add(await this.spawnGround(mapData.ground_tiles));
    this.sceneManager.addToGround(this.mapGroup);
    await this.spawnObjects();
    await this.spawnObtacles();
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
        const node0 = asset.getObjectByName("Node_0");
        const node1 = asset.getObjectByName("Node_0001");
        let quaternion;
        let position;
        if (node1) {
          quaternion = node1.quaternion;
          position = node1.position;
        } else {
          quaternion = node0.quaternion;
          position = node0.position;
        }
        asset.updateMatrixWorld;
        asset.name = ground_tile.type;
        /* const threeQuat = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            ground_tile.rotation.x,
            ground_tile.rotation.y,
            ground_tile.rotation.z
          )
        ); */
        let bodyDesc = RAPIER.RigidBodyDesc.fixed();
        bodyDesc = bodyDesc.setTranslation(...asset.position);
        bodyDesc = bodyDesc.setRotation(asset.quaternion);

        const body = this.physicsManager.world.createRigidBody(bodyDesc);
        const scale = ((1 / 2) * 1) / 3;
        const colliderDesc = RAPIER.ColliderDesc.cuboid(
          49 * scale,
          49 * scale,
          1 * scale
        );
        colliderDesc.setRotation(quaternion);
        colliderDesc.setTranslation(0, 0.25, 0);
        this.physicsManager.world.createCollider(colliderDesc, body);

        body.userData = { name: ground_tile.type };
        if (IS_DEBUG) {
          console.log("MapManager.spawnGround:", {
            asset: asset,
            quaternion: asset.quaternion,
            position: asset.position,
            //asset_node: asset.getObjectByName("Node_0"),
            bodyDesc: bodyDesc,
            body: body,
          });
        }
        asset.traverse((obj) => {
          if (obj.isMesh) {
            obj.receiveShadow = true;
            obj.updateMatrixWorld;
            //this.createCollider(obj, body);
          }
        });
        ground.add(asset);
      }
    }
    //assetsManager.addGroundColliders(ground);
    /* const terrainMesh = createTerrain(this.physicsManager.world);
    this.sceneManager.addToScene(terrainMesh); */
    /* const terrain2 = await createTerrain2(
      this.physicsManager.world,
      this.sceneManager
    );
    this.sceneManager.addToScene(terrain2); */
    const terrain = await createTerrain(this.physicsManager, this.sceneManager);
    terrain.name = "terrain";
    this.mapGroup.add(terrain);
    this.sceneManager.addToScene(terrain);

    const water = await createWater(
      this.physicsManager.world,
      this.sceneManager
    );
    this.sceneManager.addToScene(water);

    if (IS_DEBUG) {
      console.log("Ground spawned:", ground);
    }
    return ground;
  }
  async spawnObjects(objectsSpawn) {
    const instancedTrees1 = createInstancedTrees(
      this.sceneManager,
      this.physicsManager,
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1300, 0, 1300),
      40,
      "1"
    );
    const instancedTrees2 = createInstancedTrees(
      this.sceneManager,
      this.physicsManager,
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1300, 0, 1300),
      40,
      "2"
    );
  }
  async spawnObtacles(objectsSpawn) {
    const instancedRocks = createInstancedRocks(
      this.sceneManager,
      this.physicsManager,
      new THREE.Vector3(5, 5, -7),
      new THREE.Vector3(0.5, 0.5, 2),
      10,
      0.5,
      0.1,
      0,
      0.5
    );
    const instancedRocks2 = createInstancedRocks(
      this.sceneManager,
      this.physicsManager,
      new THREE.Vector3(5, 5, -7),
      new THREE.Vector3(0.5, 0.5, 2),
      20,
      0.4,
      0.1,
      0,
      0.5
    );
    const instancedRocks3 = createInstancedRocks(
      this.sceneManager,
      this.physicsManager,
      new THREE.Vector3(5, 5, -7),
      new THREE.Vector3(0.5, 0.5, 2),
      30,
      0.3,
      0.1,
      0,
      0.5
    );
    //this.obstaclesGroup.add(instancedRocks);
  }

  async spawnVehicles(vehiclesSpawns) {
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
      } else if (vehicle.type === "bus") {
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
        );
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

  //TODO arranjar os modelos para ter por por cada elemento separado numa layer/mesh diferente para isto poder funcionar
  createCollider(mesh, body) {
    const colliderDesc = this.physicsManager.getConvexMeshColliderDesc(mesh);
    /* const worldPos = mesh.getWorldPosition(new THREE.Vector3());
    const worldQuat = mesh.getWorldQuaternion(new THREE.Quaternion());
    const bodyPosRapier = body.translation();
    const bodyQuatRapier = body.rotation(); 
    const bodyPos = new THREE.Vector3(
      bodyPosRapier.x,
      bodyPosRapier.y,
      bodyPosRapier.z
    );
    const bodyQuatTHREE = new THREE.Quaternion(
      bodyQuatRapier.x,
      bodyQuatRapier.y,
      bodyQuatRapier.z,
      bodyQuatRapier.w
    );
    const localQuat = new THREE.Quaternion()
      .copy(bodyQuatTHREE)
      .invert()
      .multiply(worldQuat);
      const localPos = new THREE.Vector3().copy(worldPos).sub(bodyPos);
       */
    colliderDesc.setTranslation(...mesh.position);
    colliderDesc.setRotation(mesh.quaternion);
    this.physicsManager.world.createCollider(colliderDesc, body);
    if (IS_DEBUG) {
      console.log("MapManager.createCollider:", {
        /* meshName: mesh.name,
        bodyPosRapier: bodyPosRapier,
        bodyQuatRapier: bodyQuatRapier,
        worldPos: worldPos.toArray(),
        bodyPos: bodyPos.toArray(),
        localPos: localPos.toArray(),
        worldQuat: worldQuat.toArray(),
        bodyQuat: bodyQuatTHREE.toArray(),
        localQuat: localQuat.toArray(), */
        colliderDesc: colliderDesc,
      });
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
