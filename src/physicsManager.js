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
    //TODO : ver se preciso disto
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
  //TODO :  talvez a criação dos colliders e bodies seja feita aqui ou fazer mais funcoes mais especializadas
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
    //TODO: testar
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
  addRoadTiles(roadGroup){
    //TODO
  }
  addConstraint(constraint) {
    /* this.world.addConstraint(constraint); */
  }
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
    /* if (IS_DEBUG) {
      this.rapierDebugRender.update();
      //this.logWorldState();
      this.world.forEachRigidBody((body) => {
        console.log(
          `[RigidBody] ${body.userData?.name || "???"}`,
          body.translation()
        );
      });

      // lista todos os colisores
      // this.world.forEachCollider((collider, handle) => {
      //  console.log("Collider", handle, collider.shape(), collider.body());
      //}); 
    } */
  }
}
