//TODO : talvez diferenciar o tipo de bodies (dynamic, static, kinematic) e coliders (cuboid, ball, etc) em listas diferentes
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";

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
    this.instancedMeshes = [];
    this.instancedMeshMap = new WeakMap();

    // Auxiliares
    this._vector = new THREE.Vector3();
    this._quaternion = new THREE.Quaternion();
    this._matrix = new THREE.Matrix4();
    this._scale = new THREE.Vector3(1, 1, 1);
    // Clock para o step
    this.clock = new THREE.Clock();
    // Loop de física
    //this._interval = setInterval(() => this._step(), 1000 / frameRate);

    this.eventQueue = new RAPIER.EventQueue(true);
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
  addFixedMesh(mesh, body, name) {
    //+: Para adicionar uma mesh fixa (static) da forma convencionada
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
  addMesh(mesh, body, name) {
    //+: Para adicionar e configurar a mesh da forma convencionada deste manager
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
  addGroup(group, body, name) {
    this.meshes.push(group);
    this.meshMap.set(group, body);

    if (!group.userData) group.userData = {};
    if (!group.userData.physics) {
      group.userData.physics = { body: body, collisions: new Set() };
    } else {
      group.userData.physics.body = body;
      if (!group.userData.physics.collisions) {
        group.userData.physics.collisions = new Set();
      }
    }
    //group.userData.name = group.name;
    //group.name = name;
    group.userData.name = name;
  }
  addInstancedMesh(instancedMesh, bodies) {
    //+: Para adicionar uma InstancedMesh com os bodies associados
    /* this.instancedMeshes.push(instancedMesh);
    this.instancedMeshMap.set(instancedMesh, bodies); */
    this.meshes.push(instancedMesh);
    this.meshMap.set(instancedMesh, bodies);
    if (!instancedMesh.userData) {
      instancedMesh.userData = {};
    }
    if (!instancedMesh.userData.physics) {
      instancedMesh.userData.physics = {
        bodies: bodies,
        collisions: new Set(),
      };
    }
    instancedMesh.userData.physics.bodies = bodies; // Atualiza os bodies

    instancedMesh.userData.name = instancedMesh.name;
  }
  removeMesh(mesh) {
    //+: Para remover a mesh deste manager
    const body = this.meshMap.get(mesh);
    if (body) {
      this.world.removeRigidBody(body);
      const handles = body.colliderHandles ? body.colliderHandles() : [];
      handles.forEach((handle) => this.world.removeCollider(handle));
      this.meshMap.delete(mesh);
      const index = this.meshes.indexOf(mesh);
      if (index !== -1) {
        this.meshes.splice(index, 1);
      }
    } else {
      console.warn("removeMesh: Body não encontrado para a mesh:", mesh);
    }
  }

  addHeightfield(mesh, width, depth, heights, scale) {
    //TODO testar isto com o terrain
    const shape = RAPIER.ColliderDesc.heightfield(width, depth, heights, scale);
    console.log("SHAPE HEIGHTFIELD:", shape);
    const bodyDesc = RAPIER.RigidBodyDesc.fixed();
    bodyDesc.setTranslation(mesh.position.x, mesh.position.y, mesh.position.z);
    bodyDesc.setRotation(mesh.quaternion);

    const body = this.world.createRigidBody(bodyDesc);
    console.log("BODY HEIGHTFIELD:", body);
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
  createJointData(desc) {
    const {
      type,
      anchor1,
      anchor2,
      axis,
      frame1,
      frame2,
      limits,
      stiffness,
      damping,
      length,
      axesMask,
    } = desc;
    let jointData;
    switch (type) {
      case "fixed":
        // completely lock relative motion
        return RAPIER.JointData.fixed(
          new RAPIER.Vector3(...anchor1), // frame-A anchor
          new RAPIER.Quaternion(...frame1),
          new RAPIER.Vector3(...anchor2),
          new RAPIER.Quaternion(...frame2)
        );

      case "revolute":
        // hinge about one axis
        //TODO ver isto (tambem para as outras joints):
        /*
        if (frame1) jointData.setFrame1(new RAPIER.Rotation(...frame1));
        if (frame2) jointData.setFrame2(new RAPIER.Rotation(...frame2));
        */
        jointData = RAPIER.JointData.revolute(
          new RAPIER.Vector3(...anchor1),
          new RAPIER.Vector3(...anchor2),
          new RAPIER.Vector3(...axis)
        );
        return jointData;

      case "prismatic":
        // slider along one axis
        jointData = RAPIER.JointData.prismatic(
          new RAPIER.Vector3(...anchor1),
          new RAPIER.Vector3(...anchor2),
          new RAPIER.Vector3(...axis)
        );
        return jointData;

      case "spherical":
        // ball-and-socket
        jointData = RAPIER.JointData.spherical(
          new RAPIER.Vector3(...anchor1),
          new RAPIER.Vector3(...anchor2)
        );

      case "rope":
        // rope of fixed length
        jointData = RAPIER.JointData.rope(
          length,
          new RAPIER.Vector3(...anchor1),
          new RAPIER.Vector3(...anchor2)
        );
        return jointData;

      case "spring":
        // spring between anchors
        jointData = RAPIER.JointData.spring(
          length,
          stiffness,
          damping,
          new RAPIER.Vector3(...anchor1),
          new RAPIER.Vector3(...anchor2)
        );
        return jointData;

      case "generic":
        // custom-mask locking
        jointData = RAPIER.JointData.generic(
          new RAPIER.Vector3(...anchor1),
          new RAPIER.Vector3(...anchor2),
          new RAPIER.Vector3(...axis),
          axesMask
        );
        return jointData;

      default:
        throw new Error(`Unknown joint type: ${type}`);
    }
  }
  addJoint(bodyA, bodyB, descriptor, wakeUpBodies = true) {
    const jointData = this.createJointData(descriptor);
    return this.world.createImpulseJoint(jointData, bodyA, bodyB, wakeUpBodies);
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
    for (let obj of this.meshes) {
      const body = this.meshMap.get(obj);
      if (!body) continue;

      if (obj.isInstancedMesh) {
        //console.log ("Syncing InstancedMesh:", obj);
        const bodies = body; // assume um array de bodies
        /* const array = obj.instanceMatrix.array;
        for (let j = 0; j < bodies.length; j++) {
          const b = bodies[j];
          const pos = b.translation();
          this._quaternion.copy(b.rotation());
          this._matrix
            .compose(pos, this._quaternion, this._vector)
            .toArray(array, j * 16);
        } */
        for (let i = 0; i < bodies.length; i++) {
          const body = bodies[i];
          const t = body.translation();
          const r = body.rotation();

          this._vector.set(t.x, t.y, t.z);
          this._quaternion.set(r.x, r.y, r.z, r.w);
          this._matrix.compose(this._vector, this._quaternion, this._scale);
          obj.setMatrixAt(i, this._matrix);
        }
        obj.instanceMatrix.needsUpdate = true;
        obj.computeBoundingSphere();
      } else if (obj.isGroup || obj.type === "Group") {
        obj.position.copy(body.translation());
        obj.quaternion.copy(body.rotation());
      } else {
        //console.log("Syncing Mesh:", obj);
        //console.log("Body:", body);
        obj.position.copy(body.translation());
        obj.quaternion.copy(body.rotation());
      }
    }
  }
}
