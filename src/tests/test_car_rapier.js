import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import RAPIER from "@dimforge/rapier3d";
import { log } from "three/tsl";

const chassisCollisionGroup = 0x00020001; // 131073
const wheelCollisionGroup = 0x00040001; // 262145
const floorCollisionGroup = 0x00010001; // 65537
class RapierDebugRenderer {
  mesh;
  world;
  enabled = true;

  constructor(scene, world) {
    this.world = world;
    this.mesh = new THREE.LineSegments(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: 0xffffff, vertexColors: true })
    );
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
  }

  update() {
    if (this.enabled) {
      const { vertices, colors } = this.world.debugRender();
      this.mesh.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(vertices, 3)
      );
      this.mesh.geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 4)
      );
      this.mesh.visible = true;
    } else {
      this.mesh.visible = false;
    }
  }
}
/**
 * Devolve no console a árvore completa de um Object3D
 * num único console.log().
 * @param {THREE.Object3D} root  Nó de topo a inspeccionar
 * os valores dos nodes são valores relativos ao respetivo grupo
 */
function logObject(root) {
  const lines = [];

  function traverse(node, depth = 0) {
    if (!node) {
      console.warn("logObject: node é undefined");
      return;
    }
    const pad = "  ".repeat(depth);
    const name = node.name || "(sem nome)";
    lines.push(`${pad}- ${name} [${node.type}]`);

    // ───── propriedades do Object3D ─────
    const props = Object.keys(node)
      .filter((k) => k !== "children" && k !== "parent") // evita recursão
      .map((k) => {
        const v = node[k];
        // valores simples mostram-se directamente; objectos/funcções só o tipo
        if (
          typeof v === "number" ||
          typeof v === "string" ||
          typeof v === "boolean"
        ) {
          return `${k}: ${v}`;
        }
        if (v && (v.isVector3 || v.isEuler || v.isQuaternion)) {
          return `${k}: (${v.x?.toFixed?.(2) ?? ""} ${
            v.y?.toFixed?.(2) ?? ""
          } ${v.z?.toFixed?.(2) ?? ""})`;
        }
        return `${k}: ${v?.constructor?.name ?? typeof v}`;
      })
      .join("\n\t");

    if (props) lines.push(`${pad}  · ${props}`);

    node.children.forEach((child) => traverse(child, depth + 1));
  }

  traverse(root);
  console.log(lines.join("\n")); // imprime tudo de uma vez
}
class CarWheel {
  mesh;
  body;
  collider;
  suspensionJoint;
  spinJoint;
  steerJoint; // só roda da frente
  constructor(name, position, chassisBody, world, isSteerable = false) {
    this.mesh = this.#makeMesh(name, position);
/*     scene.add(this.mesh);
    scene.updateMatrixWorld(true); */
    const globalPos = new THREE.Vector3();
    this.mesh.getWorldPosition(globalPos);
    const globalQuat = new THREE.Quaternion();
    this.mesh.getWorldQuaternion(globalQuat);
    console.log(
      `CarWheel: ${name} globalPos: ${globalPos.toArray()} globalQuat: ${globalQuat.toArray()}`
    );

    this.body = this.#makeBody(position, globalPos, globalQuat);
    this.collider = this.#makeCollider(position, globalPos, globalQuat);

    this.#makeJoints(position, chassisBody, world, isSteerable);
  }
  #makeMesh(name, position) {
    const material = new THREE.MeshPhongMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3,
    });
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(1, 1, 0.5, 32),
      material
    );
    mesh.name = name;
    mesh.position.set(position.x, position.y, position.z);
    mesh.rotation.x = Math.PI / 2;
    mesh.rotation.z = Math.PI / 2;
    return mesh;
  }
  #makeBody(position, globalPos, globalQuat) {
    const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(...globalPos)
      //.setTranslation(position.x, position.y, position.z)
      .setRotation(globalQuat)
      /* .setAdditionalMassProperties(
                1000, // mass
                { x: 0, y: 0, z: -4 }, // centerOfMass
                { x: 1453.3, y: 1666.7, z: 453.3 }, // Momentos de inércia aproximados (em kg·m²)   
                { w: 1, x: 0, y: 0, z: 0 } // Quat. identidade para o tensor (alinhado com os eixos do carro)
              ) */
      .setCanSleep(false);
    return world.createRigidBody(rigidBodyDesc);
  }
  #makeCollider(position, globalPos, globalQuat) {
    const colliderDesc = RAPIER.ColliderDesc.cylinder(0.5 / 2, 1)
      //.setTranslation(...globalPos) // para deslocar o colisor
      //.setTranslation(position.x, position.y, position.z)
      //.setRotation(globalQuat) // para alinhar o colisor com o mesh
      .setFriction(3)
      .setRestitution(0.1)
      .setDensity(0) // o colisor não contribuirá com massa
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
      .setCollisionGroups(wheelCollisionGroup); // importante para as joints 262145 = 0x00040001, pertence ao grupo 1 e pode colidir com o grupo 4
    return world.createCollider(colliderDesc, this.body);
  }
  #makeJoints(position, chassisBody, world, isSteerable) {
    // 4) Suspensão — prismatic joint no eixo Y local do chassis
    this.suspensionJoint = world.createImpulseJoint(
      RAPIER.JointData.prismatic(
        new RAPIER.Vector3(position.x, position.y , position.z), // ponto no chassis CS
        new RAPIER.Vector3(0, 0, 0), // ponto na roda (RCs)
        new RAPIER.Vector3(0, 1, 0) // eixo Y local
      ),
      chassisBody,
      this.body,
      true
    );
    // 1) diz que este prismatic joint tem um “motor” que controla posição:
    this.suspensionJoint.configureMotorModel(RAPIER.MotorModel.PositionBased);

    // 2) define a posição-alvo do motor = ponto de repouso da suspensão
    //    e os parâmetros de mola e amortecimento:
    this.suspensionJoint.configureMotorPosition(
      /*targetPos=*/ 0, // 0 = sem deslocamento relativo do anchor
      /*stiffness=*/ 20000, // constante de mola
      /*damping=*/ 2000 // amortecimento
    );

    // 3) mantém os limites de curso:
    this.suspensionJoint.setLimits(-0.3, 0.3);
    // 5) Se for direcional, interpor steerer antes do spin
    let parentForSpin = this.body;
    if (isSteerable) {
      this.steerJoint = world.createImpulseJoint(
        RAPIER.JointData.revolute(
          new RAPIER.Vector3(position.x, position.y, position.z),
          new RAPIER.Vector3(0, 0, 0),
          new RAPIER.Vector3(0, 1, 0) // up axis para virar
        ),
        chassisBody,
        this.body,
        true
      );
      this.steerJoint.configureMotorModel(RAPIER.MotorModel.PositionBased);
      parentForSpin = this.body;
    }

    // 6) Rotação da roda — revolute joint eixo X local
    this.spinJoint = world.createImpulseJoint(
      RAPIER.JointData.revolute(
        new RAPIER.Vector3(position.x, position.y, position.z),
        new RAPIER.Vector3(0, 0, 0),
        new RAPIER.Vector3(1, 0, 0)
      ),
      chassisBody,
      this.body,
      true
    );
    this.spinJoint.configureMotorModel(RAPIER.MotorModel.ForceBased);
  }
}
class CarChassis {
  mesh;
  body;
  collider;
  constructor(position) {
    this.mesh = this.#makeMesh(position);

    const globalPos = new THREE.Vector3();
    this.mesh.getWorldPosition(globalPos);
    const globalQuat = new THREE.Quaternion();
    this.mesh.getWorldQuaternion(globalQuat);
    console.log(
      `CarChassis: globalPos: ${globalPos.toArray()} globalQuat: ${globalQuat.toArray()}`
    );

    this.body = this.#makeBody(position, globalPos, globalQuat);
    this.collider = this.#makeCollider(position, globalPos, globalQuat);
  }
  #makeMesh(position) {
    const chassisMaterial = new THREE.MeshPhongMaterial({
      color: 0xaaa000,
      transparent: true,
      opacity: 0.3,
    });
    const carChassis = new THREE.Mesh(
      new THREE.BoxGeometry(4, 3, 8),
      chassisMaterial
    );
    carChassis.position.set(position.x, position.y, position.z);
    carChassis.name = "carChassis";
    return carChassis;
  }
  #makeBody(position, globalPos, globalQuat) {
    const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      //.setTranslation(position.x, position.y, position.z)
      .setTranslation(...globalPos)
      //.setRotation()
      //.setAdditionalMass(1000) 
      /* .setAdditionalMassProperties(
                1000, // mass
                { x: 0, y: 0, z: -4 }, // centerOfMass
                { x: 1453.3, y: 1666.7, z: 453.3 }, // Momentos de inércia aproximados (em kg·m²)   
                { w: 1, x: 0, y: 0, z: 0 } // Quat. identidade para o tensor (alinhado com os eixos do carro)
              )  */
      .setCanSleep(false);
    return world.createRigidBody(rigidBodyDesc);
  }
  #makeCollider(position, globalPos, globalQuat) {
    const colliderDesc = RAPIER.ColliderDesc.cuboid(4 / 2, 3 / 2, 8 / 2)
      //.setTranslation(position.x, position.y, position.z) // para deslocar o colisor
      //.setTranslation(...globalPos) // para deslocar o colisor
      .setFriction(3)
      .setRestitution(0.1)
      .setDensity(0) // o colisor não contribuirá com massa
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
      .setCollisionGroups(chassisCollisionGroup); // importante para as joints 131073 = 0x00020001, pertence ao grupo 1 e pode colidir com o grupo 2
    return world.createCollider(colliderDesc, this.body);
  }
}
class Car {
  keyMap;
  CarGroup;
  CarChassis;
  CarWheels;
  wheelFL;
  wheelFR;
  wheelBL;
  wheelBR;
  constructor(keyMap) {
    this.keyMap = keyMap;
    this.CarGroup = new THREE.Group();
    this.CarGroup.name = "car";
    this.CarChassis = new CarChassis({ x: 0, y: 3, z: 0 });
    this.CarGroup.add(this.CarChassis.mesh);
    this.wheelFL = new CarWheel(
      "wheelFL",
      { x: -2.4, y: 2, z: 3 },
      this.CarChassis.body,
      world,
      true
    );
    this.wheelFR = new CarWheel(
      "wheelFR",
      { x: 2.4, y: 2, z: 3 },
      this.CarChassis.body,
      world,
      true
    );
    this.wheelBL = new CarWheel(
      "wheelBL",
      { x: -2.4, y: 2, z: -3 },
      this.CarChassis.body,
      world,
      false
    );
    this.wheelBR = new CarWheel(
      "wheelBR",
      { x: 2.4, y: 2, z: -3 },
      this.CarChassis.body,
      world,
      false
    );
    this.CarWheels = new THREE.Group();
    this.CarWheels.name = "CarWheels";
    this.CarGroup.add(this.CarWheels);
    this.CarWheels.add(this.wheelFL.mesh);
    this.CarWheels.add(this.wheelFR.mesh);
    this.CarWheels.add(this.wheelBL.mesh);
    this.CarWheels.add(this.wheelBR.mesh);
    logObject(this.CarGroup);
  }
  async init(scene, world, position) {
    scene.add(this.CarGroup);
  }

  update(delta) {
    // 1) Lê input
    const engineForce = this.keyMap["KeyW"] ? 4000 : 0;
    const brakeForce = this.keyMap["KeyS"] ? 2000 : 0;
    const steerAngle =
      (this.keyMap["KeyA"] ? 0.4 : 0) + (this.keyMap["KeyD"] ? -0.4 : 0);

    // 2) Aplica motor / travão nas rodas traseiras
    [this.wheelBL, this.wheelBR].forEach((w) => {
      if (this.keyMap["KeyW"])
        w.spinJoint.configureMotorVelocity(engineForce, 800);
      else if (this.keyMap["KeyS"])
        w.spinJoint.configureMotorVelocity(-brakeForce, 800);
      else w.spinJoint.configureMotorVelocity(0, 800);
    });

    // 3) Aplica direção nas rodas da frente
    [this.wheelFL, this.wheelFR].forEach((w) => {
      if (w.steerJoint) {
        w.steerJoint.configureMotorPosition(
          steerAngle,
          /*stiffness*/ 100,
          /*damping*/ 10
        );
      }
    });

    // 4) Sincroniza o grupo do carro com o chassis
    {
      const p = this.CarChassis.body.translation();
      const q = this.CarChassis.body.rotation();
      // Movimenta todo o grupo do carro no mundo
      this.CarGroup.position.set(p.x, p.y, p.z);
      this.CarGroup.quaternion.set(q.x, q.y, q.z, q.w);
    }

    // 5) Sincroniza cada roda
    /* [this.wheelFL, this.wheelFR, this.wheelBL, this.wheelBR].forEach((w) => {
      const p = w.body.translation();
      const q = w.body.rotation();
      w.mesh.position.set(p.x, p.y, p.z);
      w.mesh.quaternion.set(q.x, q.y, q.z, q.w);
    }); */
  }
}
const gravity = new RAPIER.Vector3(0.0, -9.81, 0.0);
const world = new RAPIER.World(gravity);

const scene = new THREE.Scene();

const rapierDebugRenderer = new RapierDebugRenderer(scene, world);

const gridHelper = new THREE.GridHelper(200, 100, 0x222222, 0x222222);
gridHelper.position.y = -0.5;
scene.add(gridHelper);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 5, 15);

const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);
const ambientLight = new THREE.AmbientLight("rgb(255, 255, 255)", 0.2);
scene.add(ambientLight);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// a follow cam implementation.
// a followTarget is added to the car mesh.
// A reference to the pivot is given to the car.
// The cars update method lerps the pivot towards to followTarget
const pivot = new THREE.Object3D();
const yaw = new THREE.Object3D();
const pitch = new THREE.Object3D();

scene.add(pivot);
pivot.add(yaw);
yaw.add(pitch);
pitch.add(camera); // adding the perspective camera to the hierarchy

function onDocumentMouseMove(e) {
  yaw.rotation.y -= e.movementX * 0.002;
  const v = pitch.rotation.x - e.movementY * 0.002;
  if (v > -1 && v < 0.1) {
    pitch.rotation.x = v;
  }
}

function onDocumentMouseWheel(e) {
  e.preventDefault();
  const v = camera.position.z + e.deltaY * 0.005;
  if (v >= 0.5 && v <= 5) {
    camera.position.z = v;
  }
}
// end follow cam.

const keyMap = {};

const onDocumentKey = (e) => {
  keyMap[e.code] = e.type === "keydown";
};

document.addEventListener("click", () => {
  renderer.domElement.requestPointerLock();
});
document.addEventListener("pointerlockchange", () => {
  if (document.pointerLockElement === renderer.domElement) {
    document.addEventListener("keydown", onDocumentKey, false);
    document.addEventListener("keyup", onDocumentKey, false);

    renderer.domElement.addEventListener("mousemove", onDocumentMouseMove);
    renderer.domElement.addEventListener("wheel", onDocumentMouseWheel);
  } else {
    document.removeEventListener("keydown", onDocumentKey, false);
    document.removeEventListener("keyup", onDocumentKey, false);

    renderer.domElement.removeEventListener("mousemove", onDocumentMouseMove);
    renderer.domElement.removeEventListener("wheel", onDocumentMouseWheel);
  }
});

const floorMesh = new THREE.Mesh(
  new THREE.BoxGeometry(200, 1, 200),
  new THREE.MeshPhongMaterial()
);
floorMesh.receiveShadow = true;
floorMesh.position.y = -1;
scene.add(floorMesh);
const floorBody = world.createRigidBody(
  RAPIER.RigidBodyDesc.fixed().setTranslation(0, -1, 0)
);
const floorShape = RAPIER.ColliderDesc.cuboid(100, 0.5, 100).setCollisionGroups(
  floorCollisionGroup
);
world.createCollider(floorShape, floorBody);

const car = new Car(keyMap);
await car.init(scene, world, [0, 1, 0]);

const stats = new Stats();
document.body.appendChild(stats.dom);

const gui = new GUI();
gui.add(rapierDebugRenderer, "enabled").name("Rapier Degug Renderer");

const physicsFolder = gui.addFolder("Physics");
physicsFolder.add(world.gravity, "x", -100.0, 100.0, 0.1);
physicsFolder.add(world.gravity, "y", -100.0, 100.0, 0.1);
physicsFolder.add(world.gravity, "z", -100.0, 100.0, 0.1);
const carFolder = gui.addFolder("Car - para afinar parametros do carro");

const clock = new THREE.Clock();
let delta;

function animate() {
  requestAnimationFrame(animate);

  delta = clock.getDelta();
  world.timestep = Math.min(delta, 0.1);
  world.step();

  car.update(delta);

  rapierDebugRenderer.update();

  renderer.render(scene, camera);

  stats.update();
}

animate();
