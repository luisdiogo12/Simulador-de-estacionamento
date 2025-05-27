//TODO : talvez diferenciar o tipo de bodies (dynamic, static, kinematic) e coliders (cuboid, ball, etc) em listas diferentes
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";

import { sm } from "gameManager";
import { Car } from "car";

import { RapierDebugRenderer } from "rapierDebug";
import { IS_DEBUG } from "debugManager";

export const frameRate = 60;
const gravity = { x: 0.0, y: -9.81, z: 0.0 };
export class PhysicsManager {
  world;
  meshes;
  meshMap;

  movement;
  rapierDebugRender;
  constructor(/* sceneManager */) {
    //this.sceneManager = sm
    this.world = new RAPIER.World(gravity);
    this.meshes = [];
    this.meshMap = new WeakMap();

    // Vetores auxiliares para sincronização
    this._vector = new THREE.Vector3();
    this._quaternion = new THREE.Quaternion();
    this._matrix = new THREE.Matrix4();
    // Clock para o step
    this.clock = new THREE.Clock();
    // Loop de física
    //this._interval = setInterval(() => this._step(), 1000 / frameRate);

    this.movement = {
      forward: 0,
      right: 0,
      brake: 0,
      reset: false,
      accelerateForce: { value: 0, min: -30, max: 30, step: 1 },
      brakeForce: { value: 0, min: 0, max: 1, step: 0.05 },
    };
    this.eventQueue = new RAPIER.EventQueue(true);

    //this.objects = objects;
    //TODO ver se preciso disto
    //this.dt = 1 / 60;
    /* if (IS_DEBUG) {
      this.rapierDebugRender = new RapierDebugRenderer(
        this.sceneManager.sceneGraph
      );
      console.log("RapierDebugRenderer initialized");
    } else {
      this.rapierDebugRender = null;
      console.log("RapierDebugRenderer not initialized");
    } */
  }

  addScene(scene) {
    //TODO
    scene.traverse(function (child) {
      if (child.isMesh) {
        const physics = child.userData.physics;

        if (physics) {
          //addMesh(child, physics.mass, physics.restitution);
        }
      }
    });
  }
  addMesh(mesh, body, name) {
    //+: Para adicionar e configurar a mesh da forma convencional deste manager
    this.meshes.push(mesh);
    this.meshMap.set(mesh, body);
    if (!mesh.userData) {
      mesh.userData = {};
    }
    if (!mesh.userData.physics) {
      mesh.userData.physics = { body: body, collisions: new Set() };
    } else {
      mesh.userData.physics.body = body; // Atualiza o body
      if (!mesh.userData.physics.collisions) {
        mesh.userData.physics.collisions = new Set(); // Garante que collisions exista
      }
    }
    mesh.userData.name = name;
  }


  addHeightfield(mesh, width, depth, heights, scale) {
    //TODO testar isto com o terrain
    const shape = RAPIER.ColliderDesc.heightfield(width, depth, heights, scale);

    const bodyDesc = RAPIER.RigidBodyDesc.fixed();
    bodyDesc.setTranslation(mesh.position.x, mesh.position.y, mesh.position.z);
    bodyDesc.setRotation(mesh.quaternion);

    const body = world.createRigidBody(bodyDesc);
    this.world.createCollider(shape, body);

    if (!mesh.userData.physics) mesh.userData.physics = {};
    mesh.userData.physics.body = body;

    return body;
  }

  getSimpleColliderDesc(mesh) {
    const geometry = mesh.geometry;
    const parameters = geometry.parameters;
    if (geometry.type === "BoxGeometry") {
      console.log("getSimpleColliderDesc: BoxGeometry");
      const sx = parameters.width !== undefined ? parameters.width / 2 : 0.5;
      const sy = parameters.height !== undefined ? parameters.height / 2 : 0.5;
      const sz = parameters.depth !== undefined ? parameters.depth / 2 : 0.5;

      return RAPIER.ColliderDesc.cuboid(sx, sy, sz);
    } else if (
      geometry.type === "SphereGeometry" ||
      geometry.type === "IcosahedronGeometry"
    ) {
      console.log("getSimpleColliderDesc: SphereGeometry");
      const radius = parameters.radius !== undefined ? parameters.radius : 1;
      return RAPIER.ColliderDesc.ball(radius);
    } else if (geometry.type === "CylinderGeometry") {
      console.log("getSimpleColliderDesc: CylinderGeometry");
      const radius =
        parameters.radiusBottom !== undefined ? parameters.radiusBottom : 0.5;
      const length = parameters.height !== undefined ? parameters.height : 0.5;

      return RAPIER.ColliderDesc.cylinder(length / 2, radius);
    } else if (geometry.type === "CapsuleGeometry") {
      console.log("getSimpleColliderDesc: CapsuleGeometry");
      const radius = parameters.radius !== undefined ? parameters.radius : 0.5;
      const length = parameters.height !== undefined ? parameters.height : 0.5;

      return RAPIER.ColliderDesc.capsule(length / 2, radius);
    } else {
      console.warn("getSimpleColliderDesc: geometry não é um tipo suportado.");
      return null;
    }
  }
  getTrimeshColliderDesc(mesh) {
    //+: Baseado numa mesh, cria um collider trimesh
    const geometry = mesh.geometry;
    if (!geometry.isBufferGeometry) {
      console.warn(
        "getTrimeshColliderDesc: mesh não é um BufferGeometry válido."
      );
      return null;
    }
    const vertices = [];
    const vertex = new Vector3();
    const position = geometry.getAttribute("position");

    for (let i = 0; i < position.count; i++) {
      vertex.fromBufferAttribute(position, i);
      vertices.push(vertex.x, vertex.y, vertex.z);
    }

    // if the buffer is non-indexed, generate an index buffer
    const indices =
      geometry.getIndex() === null
        ? Uint32Array.from(Array(parseInt(vertices.length / 3)).keys())
        : geometry.getIndex().array;
    const col = RAPIER.ColliderDesc.trimesh(vertices, indices);
    return col;
  }

  getConvexMeshColliderDesc(mesh) {
    //+: Baseado numa mesh, cria um collider convex
    if (!mesh.isMesh) {
      console.warn("createConvexMeshColliderDesc: mesh não é um Mesh válido.");
      return null;
    }
    const verts = new Float32Array(
      mesh.geometry.getAttribute("position").array
    );

    //!: ver qual das duas maneiras e melhor
    /* const v = new THREE.Vector3();
    let positions = [];
    carMesh.updateMatrixWorld(true); // ensure world matrix is up to date
    carMesh.traverse((o) => {
      if (o.type === "Mesh") {
        const positionAttribute = o.geometry.getAttribute("position");
        for (let i = 0, l = positionAttribute.count; i < l; i++) {
          v.fromBufferAttribute(positionAttribute, i);
          v.applyMatrix4(o.parent.matrixWorld);
          positions.push(...v);
        }
      }
    }); */

    const col = RAPIER.ColliderDesc.convexMesh(verts);
    //col.setCollisionGroups(131073); //FIXME ainda nao sei se uso isto, nem onde por caso use
    //col.setFriction(3); //FIXME
    //col.setRestitution(0.1); //FIXME
    //col.mass(1); //FIXME
    //col.setTranslation(mesh.position.x, mesh.position.y, mesh.position.z);
    return col;
  }
  addRoadTiles(roadGroup) {
    //TODO
  }
  addConstraint(constraint) {
    /* this.world.addConstraint(constraint); */
  }
  //TODO talvez a criação dos colliders e bodies seja feita aqui ou fazer mais funcoes mais especializadas
  /* 
  como por exemplo de uso: 
  physicsManager.addCompoundMesh(bigrock, {
    body: {
      type:    'dynamic',
      translation: bigrock.position.toArray(),      // [x,y,z]
      rotation:    bigrock.quaternion.toArray()      // [x,y,z,w]
    },
    colliders: [
      { shape: 'cuboid', halfExtents: [0.25,0.25,0.25], translation: mini_rock1.position.toArray() },
      { shape: 'cuboid', halfExtents: [0.1,0.1,0.1],   translation: mini_rock2.position.toArray() },
      { shape: 'cuboid', halfExtents: [0.1,0.1,0.1],   translation: mini_rock3.position.toArray() },
      { shape: 'cuboid', halfExtents: [0.2,0.2,0.2],   translation: mini_rock4.position.toArray() },
    ],
    name: 'bigrock'
  }); 
  ou createBody(), ou um addMesh que dado RAPIER.RigidBodyDesc e RAPIER.ColliderDesc cria o body e collider
  ou uma funcao que dado uma mesh cria as descrições dos colliders e bodies e depois chama o addMesh
  */
  logWorldState() {
    console.log("=== RigidBodies no Mundo ===");
    this.world.bodies.forEach((body, handle) => {
      console.log(`Body ${handle}:`, body.translation(), body.colliders());
    });

    console.log("=== Colliders no Mundo ===");
    this.world.colliders.forEach((collider, handle) => {
      console.log(`Collider ${handle}:`, collider.shape);
    });
  }

  //_step()
  step(dt) {
    //this.world.timestep = this.clock.getDelta();
    this.world.timestep = dt;
    this.world.step();

    /* this.car.chassisMesh.position.copy(this.car.chassisBody.translation());
    this.car.chassisMesh.quaternion.copy(this.car.chassisBody.rotation()); */

    //Sync meshes
    for (let mesh of this.meshes) {
      const body = this.meshMap.get(mesh);
      if (!body) continue;

      if (mesh.isInstancedMesh) {
        const array = mesh.instanceMatrix.array;
        const bodies = body; // assume um array de bodies
        for (let j = 0; j < bodies.length; j++) {
          const b = bodies[j];
          const pos = b.translation();
          this._quaternion.copy(b.rotation());
          this._matrix
            .compose(pos, this._quaternion, this._vector)
            .toArray(array, j * 16);
        }
        mesh.instanceMatrix.needsUpdate = true;
        mesh.computeBoundingSphere();
      } else {
        mesh.position.copy(body.translation());
        mesh.quaternion.copy(body.rotation());
      }
    }
  }
}
