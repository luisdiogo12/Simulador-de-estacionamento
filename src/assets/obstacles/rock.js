//TODO
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";

import { IS_DEBUG } from "debugManager";

//!: InstancedMesh : um BufferGeometry um material, todas as instancias sao copias dessa geometria e so vaia as transformacoes e atributos
//!: BatchedMesh   : multiplos BufferGeometry um material, cada instancia faz referencia a um id de uma geometria

const geometries = [
  new THREE.BoxGeometry(0.3, 0.3, 0.4),
  new THREE.CylinderGeometry(0.3, 0.3, 0.4, 8),
  //R_geo3 = new THREE.CylinderGeometry(0.3, 0.3, 0.4, 32),
  //R_geo4 = new THREE.CylinderGeometry(0.3, 0.3, 0.4, 32),
  //R_geo5 = new THREE.CylinderGeometry(0.3, 0.3, 0.4, 32),
  //R_geo6 = new THREE.CylinderGeometry(0.3, 0.3, 0.4, 32)
];

const materials = [
  new THREE.MeshBasicMaterial({
    color: 0xff0000 /* side: THREE.DoubleSide */,
  }),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
  new THREE.MeshBasicMaterial({ color: 0xffff00 }),
];

const n_instances = [100]; //!: para ser um parametro
const vertexCount = geometries.length * 512;
const indexCount = geometries.length * 1024;

const batchedMeshes = [
  new THREE.BatchedMesh(
    n_instances[0], //maxInstanceCount
    vertexCount, //maxVertexCount
    indexCount, //maxIndexCount
    materials[0] //material
  ),
  /*
  new THREE.BatchedMesh(
    n_instances[1], //maxInstanceCount
    vertexCount, //maxVertexCount
    indexCount, //maxIndexCount
    materials[1] //material),
  new THREE.BatchedMesh(
    n_instances[2], //maxInstanceCount
    vertexCount, //maxVertexCount
    indexCount, //maxIndexCount
    materials[2] //material),
  new THREE.BatchedMesh(
    n_instances[3], //maxInstanceCount
    vertexCount, //maxVertexCount
    indexCount, //maxIndexCount
    materials[3] //material)
*/
];

const geometryIds = [
  batchedMeshes[0].addGeometry(geometries[0]),
  batchedMeshes[0].addGeometry(geometries[1]),
];

scene.add(batchedMeshes[0]);