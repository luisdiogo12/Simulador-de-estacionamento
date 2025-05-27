// TODO : alterar os modelos para car, road, road_turn_left, road_turn_right, road_junction_left, road_junction_right, road_junction_left_right, grass, rock, tree

/**
 * @module AssetManager
 * @description Gerencia o carregamento e criação de assets 3D para o simulador
 */
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";

import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

import { Bulldozer } from "bulldozer";
import { Bus } from "bus";
import { Car } from "car";
import { Tank } from "tank";
import { Truck } from "truck";


import { IS_DEBUG } from "debugManager";


const modelPath = import.meta.env.BASE_URL + "models"; //const modelPath = '/models'; // Caminho base para os modelos
//const loader = new GLTFLoader();
//const dracoLoader = new DRACOLoader();
//const modelCache = new Map(); // Cache para modelos carregados (evita recarregar o mesmo arquivo múltiplas vezes)

const tileSize = { x: 49, y: 2, z: 49 }; //tamanho do quadriculado
const tileScale = {x:1/3,y:1/3,z:1/3}; //escala a ser aplicada ao quadriculado - 49 -> 12.25
const posFactor = {
  x: tileSize.x * tileScale.x,
  y: tileSize.y * tileScale.y,
  z: tileSize.z * tileScale.z,
};

class AssetManager {
  constructor() {
    this.loader = new GLTFLoader();
    this.dracoLoader = new DRACOLoader();
    this.modelCache = new Map();
    this.assets = {
      //TODO eliminar modelos deprecados
      car: this._loadGLTF("SUV.glb"),
      road: this._loadGLTFtiles("road/road_49.gltf"),
      road_turn_left: this._loadGLTFtiles("road/road_TL_49.gltf"),
      road_turn_right: this._loadGLTFtiles("road/road_TR_49.gltf"),
      road_junction_left: this._loadGLTFtiles("road/road_JL_49.gltf"),
      road_junction_right: this._loadGLTFtiles("road/road_JR_49.gltf"),
      road_junction_left_right: this._loadGLTFtiles("road/road_I_49.gltf"),
      park1: this._loadGLTFtiles("road/park1_49.gltf"),
      grass: this._loadGLTF("erva.gltf"),
      rock: this._makePrimitive(() => new THREE.BoxGeometry(1, 1, 1)),
      tree: this._makeTree.bind(this),
      trafic_light: this._makeTrafficLight.bind(this),
    };
  }
  updateLevel(physicsManager, sceneManager, vehicleManager) {
    this.sm = sceneManager;
    this.vm = vehicleManager;
    this.pm = physicsManager;
  }

  _loadGLTFtiles(filename) {
    return async (x, y, z) => {
      if (!this.modelCache.has(filename)) {
        const glb = await this.loader.loadAsync(`${modelPath}/${filename}`);
        console.log(`Loaded model- glb:`, glb);
        const scene = glb.scene;
        scene.matrixAutoUpdate = true;
        this.modelCache.set(filename, scene);
      }
      const clone = this.modelCache.get(filename).clone();
      clone.scale.set(tileScale.x, tileScale.y, tileScale.z);
      clone.position.set(x * posFactor.x, y * posFactor.y, z * posFactor.z);
      return clone;
    };
  }
  _loadGLTF(filename) {
    return async (x, y, z) => {
      if (!this.modelCache.has(filename)) {
        const glb = await this.loader.loadAsync(`${modelPath}/${filename}`);
        console.log(`Loaded model- glb:`, glb);
        const scene = glb.scene;
        scene.matrixAutoUpdate = true;
        this.modelCache.set(filename, scene);
      }
      const clone = this.modelCache.get(filename).clone();
      clone.position.set(x, y, z);
      return clone;
    };
  }

  /** helper: retorna função que cria geometria/minimal mesh */
  _makePrimitive(createGeoFn) {
    return async (x, y, z) => {
      const geo = createGeoFn();
      const mat = new THREE.MeshBasicMaterial({ color: 0x808080 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      return mesh;
    };
  }

  async _makeTree(x, y, z) {
    const parts = [
      {
        geo: new THREE.CylinderGeometry(0.5, 0.5, 2),
        pos: new THREE.Vector3(x, 1, y),
      },
      { geo: new THREE.SphereGeometry(1), pos: new THREE.Vector3(x, 3, y) },
    ];
    const geos = parts.map(({ geo, pos }) => {
      const g = geo.clone();
      g.applyMatrix4(new THREE.Matrix4().makeTranslation(pos.x, pos.y, pos.z));
      return g;
    });
    const merged = BufferGeometryUtils.mergeGeometries(geos);
    const tree = new THREE.Mesh(
      merged,
      new THREE.MeshBasicMaterial({ color: 0x8b4513 })
    );
    tree.position.set(x, y, z);
    return tree;
  }

  async _makeTrafficLight(x, y, z) {
    const geo = new THREE.BoxGeometry(0.5, 1, 0.5);
    const mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    return mesh;
  }

  /**
   * Cria uma instância de asset no mundo
   * @param {string} type – chave em this.assets
   * @param {number} x, y, z – posição
   * @param {{ y:number }} rotation
   * @param {{ x:number, y:number, z:number }} scale
   */
  async createAssetInstance(
    type,
    x,
    y,
    z,
    rotation = { x: 0,y: 0, z: 0 },
    scale = { x: 1, y: 1, z: 1 }
  ) {
    const creator = this.assets[type];
    if (!creator) {
      console.error(`Asset type "${type}" not registered.`);
      return;
    }
    const instance = await creator(x, y, z);
    instance.rotation.x = rotation.x;
    instance.rotation.y = rotation.y;
    instance.rotation.z = rotation.z; // 90 graus em radianos
    console.log("instance rotation and position", instance.rotation, instance.position);
    //instance.scale.set(scale.x, scale.y, scale.z);
    // marcador para física, se necessário
    if (!instance.userData) instance.userData = {};
    return instance;
  }

  //TODO : integrar com o resto dos assets
  createCarInstance(
    position = { x: 0, y: 3, z: 0 },
    rotation = { x: 0, y: 0, z: 0 },
    config = {}
  ) {
    const radRotat = {
      x: THREE.MathUtils.degToRad(rotation.x),
      y: THREE.MathUtils.degToRad(rotation.y),
      z: THREE.MathUtils.degToRad(rotation.z),
    };
    const options = {
      chassisPosition: new THREE.Vector3(position.x, position.y, position.z),
      chassisRotation: new THREE.Euler(
        radRotat.x,
        radRotat.y,
        radRotat.z,
        "XYZ"
      ),
      ...config,
    };
    console.log("options", options);
    const car = new Car(
      this.sm.sceneGraph,
      this.pm.world,
      options,
      this.pm.rapierDebugRender
    );
    //car.chassisMesh.position.set(x, y, z); //FIXME
    //car.chassisBody.setTranslation(x, y, z);
    this.pm.addMesh(car.chassisMesh, car.chassisBody, "car"); // add car to the physicsManager
    this.sm.addToScene(car.chassisMesh); // add car to the sceneManager
    this.vm.addVehicle(car); // add car to the vehicleManager
    return car;
  }
  createBulldozerInstance(
    position = { x: 0, y: 3, z: 0 },
    rotation = { x: 0, y: 0, z: 0 },
    config = {}
  ) {
    const radRotat = {
      x: THREE.MathUtils.degToRad(rotation.x),
      y: THREE.MathUtils.degToRad(rotation.y),
      z: THREE.MathUtils.degToRad(rotation.z),
    };
    const options = {
      chassisPosition: new THREE.Vector3(position.x, position.y, position.z),
      chassisRotation: new THREE.Euler(
        radRotat.x,
        radRotat.y,
        radRotat.z,
        "XYZ"
      ),
      ...config,
    };
    console.log("options", options);
    const bulldozer = new Bulldozer(
      this.sm.sceneGraph,
      this.pm.world,
      options,
      this.pm.rapierDebugRender
    );
    //bulldozer.chassisMesh.position.set(x, y, z); //FIXME
    //bulldozer.chassisBody.setTranslation(x, y, z);
    this.pm.addMesh(bulldozer.chassisMesh, bulldozer.chassisBody, "bulldozer"); // add bulldozer to the physicsManager
    this.sm.addToScene(bulldozer.chassisMesh); // add bulldozer to the sceneManager
    this.vm.addVehicle(bulldozer); // add bulldozer to the vehicleManager
    return bulldozer;
  }
  createBusInstance(
    position = { x: 0, y: 3, z: 0 },
    rotation = { x: 0, y: 0, z: 0 },
    config = {}
  ) {
    const radRotat = {
      x: THREE.MathUtils.degToRad(rotation.x),
      y: THREE.MathUtils.degToRad(rotation.y),
      z: THREE.MathUtils.degToRad(rotation.z),
    };
    const options = {
      chassisPosition: new THREE.Vector3(position.x, position.y, position.z),
      chassisRotation: new THREE.Euler(
        radRotat.x,
        radRotat.y,
        radRotat.z,
        "XYZ"
      ),
      ...config,
    };
    console.log("options", options);
    const bus = new Bus(
      this.sm.sceneGraph,
      this.pm.world,
      options,
      this.pm.rapierDebugRender
    );
    //bus.chassisMesh.position.set(x, y, z); //FIXME
    //bus.chassisBody.setTranslation(x, y, z);
    this.pm.addMesh(bus.chassisMesh, bus.chassisBody, "bus"); // add bus to the physicsManager
    this.sm.addToScene(bus.chassisMesh); // add bus to the sceneManager
    this.vm.addVehicle(bus); // add bus to the vehicleManager
    return bus;
  }
  createTankInstance(
    position = { x: 0, y: 3, z: 0 },
    rotation = { x: 0, y: 0, z: 0 },
    config = {}
  ) {
    const radRotat = {
      x: THREE.MathUtils.degToRad(rotation.x),
      y: THREE.MathUtils.degToRad(rotation.y),
      z: THREE.MathUtils.degToRad(rotation.z),
    };
    const options = {
      chassisPosition: new THREE.Vector3(position.x, position.y, position.z),
      chassisRotation: new THREE.Euler(
        radRotat.x,
        radRotat.y,
        radRotat.z,
        "XYZ"
      ),
      ...config,
    };
    console.log("options", options);
    const tank = new Tank(
      this.sm.sceneGraph,
      this.sm,
      this.pm.world,
      this.pm,
      options,
      this.pm.rapierDebugRender
    );
    //tank.chassisMesh.position.set(x, y, z); //FIXME
    //tank.chassisBody.setTranslation(x, y, z);
    this.pm.addMesh(tank.chassisMesh, tank.chassisBody, "tank"); // add tank to the physicsManager
    this.sm.addToScene(tank.chassisMesh); // add tank to the sceneManager
    this.vm.addVehicle(tank); // add tank to the vehicleManager
    return tank;
  }
  createTruckInstance(
    position = { x: 0, y: 3, z: 0 },
    rotation = { x: 0, y: 0, z: 0 },
    config = {}
  ) {
    const radRotat = {
      x: THREE.MathUtils.degToRad(rotation.x),
      y: THREE.MathUtils.degToRad(rotation.y),
      z: THREE.MathUtils.degToRad(rotation.z),
    };
    const options = {
      chassisPosition: new THREE.Vector3(position.x, position.y, position.z),
      chassisRotation: new THREE.Euler(
        radRotat.x,
        radRotat.y,
        radRotat.z,
        "XYZ"
      ),
      ...config,
    };
    console.log("options", options);
    const truck = new Truck(
      this.sm.sceneGraph,
      this.pm.world,
      options,
      this.pm.rapierDebugRender
    );
    //truck.chassisMesh.position.set(x, y, z); //FIXME
    //truck.chassisBody.setTranslation(x, y, z);
    this.pm.addMesh(truck.chassisMesh, truck.chassisBody, "truck"); // add truck to the physicsManager
    this.sm.addToScene(truck.chassisMesh); // add truck to the sceneManager
    this.vm.addVehicle(truck); // add truck to the vehicleManager
    return truck;
  }

  //FIXME : provisorio
  //TODO : melhorar os colideres do chão, de modo a incluir formais mais complexas, experimentar Trimesh
  addGroundColliders(mesh) {
    const groundBodyDesc = RAPIER.RigidBodyDesc.fixed(); //TODO : alterar aqui para uma variavel
    //groundBodyDesc.setRotation(0, 0, 0, 1); //TODO : alterar aqui para uma variavel
    groundBodyDesc.setTranslation(0, 0, 0);
    const groundBody = this.pm.world.createRigidBody(groundBodyDesc);
    groundBody.userData = { name: "ground" }; // Adiciona um nome ao corpo
    const groundColliderDesc = RAPIER.ColliderDesc.cuboid(
      80,
      0.5,
      48
    ).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS); //TODO : alterar aqui para uma variavel

    const groundCollider = this.pm.world.createCollider(
      groundColliderDesc,
      groundBody
    );
    this.pm.addMesh(mesh, groundBody, "ground"); // Adiciona o mesh ao sistema de física
  }
}
//SECTION
//NOTE Caso seja necessário resetar a cache entre niveis mudar isto
//!SECTION
//!: Exporta uma unica instância de AssetManager, assim usa sempre esta para ter sempre a mesma cache
export const assetsManager = new AssetManager();