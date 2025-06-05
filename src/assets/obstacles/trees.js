import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { ColladaLoader } from "three/examples/jsm/Addons.js";

const modelPath = import.meta.env.BASE_URL + "models/trees/";

/* const C_loader = new ColladaLoader();
const O_loader = new THREE.ObjectLoader();
function loadTreeModel(type) {
  return new Promise((resolve, reject) => {
    C_loader.load(
      modelPath + type + ".dae",
      (collada) => {
        console.log("collada:", collada);
        const model = collada.scene;
        resolve(model);
      },
      undefined,
      (error) => {
        console.error("Error loading tree model:", error);
        reject(error);
      }
    );
  });
}
async function fetchTreeJSON(type) {
  // Ajuste esse caminho conforme o local onde você colocou o JSON
  const url = `${import.meta.env.BASE_URL}models/trees/${type}.json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Falha ao carregar JSON: ${response.statusText}`);
  }
  return await response.json(); // retorna o objeto JS
}
async function loadTreeFromJSON() {
  const json = await fetchTreeJSON(modelPath + "tree2_49.json");

  const object3D = O_loader.parse(modelPath + "tree2_49.json");
  return object3D;
}
 */
//TODO adicionar isto num utils
const raycaster = new THREE.Raycaster();
const downDir = new THREE.Vector3(0, -1, 0);
function getMeshAndHeightAtXZ(x, z, yFrom, scene, includeInvisible = false) {
  const origin = new THREE.Vector3(x, yFrom, z);

  raycaster.set(origin, downDir);
  const allMeshes = [];
  scene.traverse((obj) => {
    if (obj.isMesh) {
      if (includeInvisible || obj.visible) {
        allMeshes.push(obj);
      }
    }
  });

  const intersects = raycaster.intersectObjects(allMeshes, true);
  if (intersects.length === 0) {
    return null; 
  }

  const hit = intersects[0];
  const hitMesh = hit.object;
  const heightY = hit.point.y;

  const instanceId = typeof hit.instanceId === "number" ? hit.instanceId : null;

  return {
    mesh: hitMesh,
    instanceId: instanceId,
    height: heightY,
  };
}


function getRandomPosition(position, dispersion) {
  return new THREE.Vector3(
    position.x + (Math.random() - 0.5) * dispersion.x,
    position.y + (Math.random() - 0.5) * dispersion.y,
    position.z + (Math.random() - 0.5) * dispersion.z
  );
}
export async function createInstancedTrees(
  sceneManager,
  physicsManager,
  position,
  dispersion,
  count,
  type,
) {


 ///////////////////////////////
  let geometry;
  let material;
  let treeHeight;
  //TODO por este switch em asstetsManager
  switch (type) {
    case "1":
      treeHeight = 30;
      geometry = new THREE.CylinderGeometry(0.2, 5, treeHeight, 8);
      material = new THREE.MeshStandardMaterial({ color: 0x1ab060 });
      break;
    case "2":
      treeHeight = 15;
      geometry = new THREE.CylinderGeometry(0.3, 3, treeHeight, 8);
      material = new THREE.MeshStandardMaterial({ color: 0x0af080 });
      break;
    default:
      geometry = new THREE.CylinderGeometry(0.4, 0.4, 1, 8);
      material = new THREE.MeshStandardMaterial({ color: 0x2a9060 });
      break;
  }
  const exampleMesh = new THREE.Mesh(geometry, material);
  const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
  instancedMesh.name = type + "_trees";
  instancedMesh.castShadow = true;
  instancedMesh.receiveShadow = true;
  instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  sceneManager.addToScene(instancedMesh);
  for (let i = 0; i < count; i++) {
    let r_position;
    let validPosition = false;
    while (!validPosition) {
      r_position = getRandomPosition(position, dispersion);

      const resultado = getMeshAndHeightAtXZ(
        r_position.x,
        r_position.z,
        30,
        sceneManager.sceneGraph
      );
      if (resultado && resultado.mesh.name === "terrain") {
        console.log("before r_position", r_position);
        r_position.y = resultado.height + treeHeight/2;
        validPosition = true;
        console.log("after r_position", r_position);
      }
    }

    const bodyDesc = RAPIER.RigidBodyDesc.fixed().setTranslation(
      r_position.x,
      r_position.y,
      r_position.z
    );
    const body = physicsManager.world.createRigidBody(bodyDesc);
    const colliderDesc = physicsManager.getConvexMeshColliderDesc(exampleMesh);
    physicsManager.world.createCollider(colliderDesc, body);
    const aux_position = new THREE.Vector3(
      r_position.x,
      r_position.y,
      r_position.z
    );
    const aux_quaternion = new THREE.Quaternion(0, 0, 0, 1);
    const aux_scale = new THREE.Vector3(1, 1, 1);
    const aux_matrix = new THREE.Matrix4();
    aux_matrix.compose(aux_position, aux_quaternion, aux_scale);
    instancedMesh.setMatrixAt(i, aux_matrix);
  }
  return instancedMesh;
}
