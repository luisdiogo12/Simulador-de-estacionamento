import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { IS_DEBUG } from "debugManager";

//!: InstancedMesh : um BufferGeometry um material, todas as instancias sao copias dessa geometria e so vaia as transformacoes e atributos
//!: BatchedMesh   : multiplos BufferGeometry um material, cada instancia faz referencia a um id de uma geometria
//TODO haver opcao de usar batchedMesh
export function createInstancedRocks(
  sceneManager,
  physicsManager,
  position,
  dispersion,
  count,
  size,
  mass,
  restitution,
  friction
) {
  let instancedMesh,
    bodies = [];
  const aux_matrix = new THREE.Matrix4();
  const aux_position = new THREE.Vector3();
  const aux_quat = new THREE.Quaternion();
  const aux_scale = new THREE.Vector3(1, 1, 1);

  const rock_g = new THREE.SphereGeometry(size, 3, 4);
  const rock_m = new THREE.MeshStandardMaterial({ color: 0x734d31 });
  const exampleMesh = new THREE.Mesh(rock_g, rock_m);

  instancedMesh = new THREE.InstancedMesh(rock_g, rock_m, count);
  instancedMesh.castShadow = true;
  instancedMesh.receiveShadow = true;

  instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  sceneManager.addToScene(instancedMesh);

  for (let i = 0; i < count; i++) {
    const px = position.x + (Math.random() - 0.5) * dispersion.x;
    const py = position.y + (Math.random() - 0.5) * dispersion.y;
    const pz = position.z + (Math.random() - 0.5) * dispersion.z;

    const bodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(px, py, pz);
    const body = physicsManager.world.createRigidBody(bodyDesc);
    const colliderDesc = physicsManager.getConvexMeshColliderDesc(exampleMesh);
    colliderDesc.setRestitution(restitution);
    colliderDesc.setMass(mass);
    colliderDesc.setFriction(friction);
    physicsManager.world.createCollider(colliderDesc, body);

    bodies.push(body);

    const t = body.translation();
    const r = body.rotation();
    aux_position.set(t.x, t.y, t.z);
    aux_quat.set(r.x, r.y, r.z, r.w);
    aux_matrix.compose(aux_position, aux_quat, aux_scale);
    instancedMesh.setMatrixAt(i, aux_matrix);
  }
  physicsManager.addInstancedMesh(instancedMesh, bodies);
  return instancedMesh;
}