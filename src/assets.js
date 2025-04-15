// TODO : alterar os modelos para car, road, road_turn_left, road_turn_right, road_junction_left, road_junction_right, road_junction_left_right, grass, rock, tree

import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

// TODO : alterar para "import { IS_DEBUG, initDebugListener, updateDebugStats } from './debug.js';" quando o debbuger estiver pronto
export const IS_DEBUG = import.meta.env.DEV; // true em desenvolvimento, false em produção

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();

//const modelPath = '/models'; // Caminho base para os modelos
const modelPath = import.meta.env.BASE_URL + 'models';

// Cache para modelos carregados (evita recarregar o mesmo arquivo múltiplas vezes)
const modelCache = new Map();

const assets = {
  'car': async (x,y,z) => {
    if (!modelCache.has('car')) {
      const glb = await loader.loadAsync(`${modelPath}/SUV.glb`);
      const model = glb.scene;
      model.matrixAutoUpdate = true;
      modelCache.set('car', model);
    }

    // Clona o modelo do cache para reutilização
    const clonedModel = modelCache.get('car').clone();
    clonedModel.position.set(x, y, z);
    clonedModel.scale.set(0.5, 0.5, 0.5);

    clonedModel.userData.physics = {
      type: 'dynamic',
      collider: 'cuboid'
    };
    return clonedModel;
  },
  'road': async (x,y,z) => {
    if (!modelCache.has('road')) {
      const glb = await loader.loadAsync(`${modelPath}/road.gltf`);
      const model = glb.scene;
      model.matrixAutoUpdate = true;
      modelCache.set('road', model);
    }

    // Clona o modelo do cache para reutilização
    const clonedModel = modelCache.get('road').clone();
    clonedModel.position.set(x, y, z);
    return clonedModel;
  },
  'road2': async (x,y,z) => {
    if (!modelCache.has('road2')) {
      const glb = await loader.loadAsync(`${modelPath}/road2.gltf`);
      const model = glb.scene;
      model.matrixAutoUpdate = true;
      modelCache.set('road2', model);
    }

    // Clona o modelo do cache para reutilização
    const clonedModel = modelCache.get('road2').clone();
    clonedModel.position.set(x, y, z);
    return clonedModel;
  },
  'road_turn_left': async (x,y,z) => {
    if (!modelCache.has('road_turn_left')) {
      const glb = await loader.loadAsync(`${modelPath}/road_clean.gltf`);
      const model = glb.scene;
      model.matrixAutoUpdate = true;
      modelCache.set('road_turn_left', model);
    }

    // Clona o modelo do cache para reutilização
    const clonedModel = modelCache.get('road_turn_left').clone();
    clonedModel.position.set(x, y, z);
    return clonedModel;
  },
  'road_turn_right': async (x,y,z) => {
    if (!modelCache.has('road_turn_right')) {
      const glb = await loader.loadAsync(`${modelPath}/road_clean.gltf`);
      const model = glb.scene;
      model.matrixAutoUpdate = true;
      modelCache.set('road_turn_right', model);
    }

    // Clona o modelo do cache para reutilização
    const clonedModel = modelCache.get('road_turn_right').clone();
    clonedModel.position.set(x, y, z);
    return clonedModel;
  },
  'road_junction_left': async (x,y,z) => {
    if (!modelCache.has('road_junction_left')) {
      const glb = await loader.loadAsync(`${modelPath}/road_clean.gltf`);
      const model = glb.scene;
      model.matrixAutoUpdate = true;
      modelCache.set('road_junction_left', model);
    }

    // Clona o modelo do cache para reutilização
    const clonedModel = modelCache.get('road_junction_left').clone();
    clonedModel.position.set(x, y, z);
    return clonedModel;
  },
  'road_junction_right': async (x,y,z) => {
    if (!modelCache.has('road_junction_right')) {
      const glb = await loader.loadAsync(`${modelPath}/road_clean.gltf`);
      const model = glb.scene;
      model.matrixAutoUpdate = true;
      modelCache.set('road_junction_right', model);
    }

    // Clona o modelo do cache para reutilização
    const clonedModel = modelCache.get('road_junction_right').clone();
    clonedModel.position.set(x, y, z);
    return clonedModel;
  },
  'road_junction_left_right': async (x,y,z) => {
    if (!modelCache.has('road_junction_left_right')) {
      const glb = await loader.loadAsync(`${modelPath}/road_clean.gltf`);
      const model = glb.scene;
      model.matrixAutoUpdate = true;
      modelCache.set('road_junction_left_right', model);
    }

    // Clona o modelo do cache para reutilização
    const clonedModel = modelCache.get('road_junction_left_right').clone();
    clonedModel.position.set(x, y, z);
    return clonedModel;
  },
  'grass': async (x,y,z) => {
    if (!modelCache.has('grass')) {
      const glb = await loader.loadAsync(`${modelPath}/erva.gltf`);
      const model = glb.scene;
      model.matrixAutoUpdate = true;
      modelCache.set('grass', model);
    }

    // Clona o modelo do cache para reutilização
    const clonedModel = modelCache.get('grass').clone();
    clonedModel.position.set(x, y, z);
    return clonedModel;
  },
  'rock': (x,y,z) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.userData.physics = {
      type: 'fixed',
      collider: 'sphere'
    };
    return mesh;
  },
  'tree': (x,y,z) => {
    const createTreePart = (geometry, position) => ({
        geo: geometry,
        pos: position
      });
    const parts = [
      createTreePart(
        new THREE.CylinderGeometry(0.5, 0.5, 2),
        new THREE.Vector3(x, 1, y)
      ),
      createTreePart(
        new THREE.SphereGeometry(1),
        new THREE.Vector3(x, 3, y)
      )
    ];
    // Aplica transformações e coleta geometrias
    const geometriesToMerge = parts.map(part => {
      const geometry = part.geo.clone();
      geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(part.pos.x, part.pos.y, part.pos.z));
      return geometry;
    });
    // Mescla todas as geometrias
    const mergedGeo = BufferGeometryUtils.mergeGeometries(geometriesToMerge);
    const tree = new THREE.Mesh(mergedGeo, new THREE.MeshBasicMaterial({ color: 0x8B4513 }));
    tree.position.set(x,y,z);
    return tree;
  },
  'trafic_light': (x,y,z) => {
    const geometry = new THREE.BoxGeometry(0.5, 1, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    return mesh;
  },
};

export async function createAssetInstance(type, x, y, z, rotation = { y: 0 }, scale = { x: 1, y: 1, z: 1 }) {
  if (type in assets) {
    const instance = await assets[type](x, y, z);
    instance.rotation.y = rotation.y;
    instance.scale.set(scale.x, scale.y, scale.z);
    return instance;
  } else {
    console.error(`Asset type "${type}" not found.`);
    return undefined;
  }
}