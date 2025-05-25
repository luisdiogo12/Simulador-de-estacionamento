import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import RAPIER from "@dimforge/rapier3d";
import { log } from "three/tsl";
const modelPath =
  import.meta.env.BASE_URL + "models/kenney_car-kit/Models/GLB_format";
const CoACDmodelPath =
  import.meta.env.BASE_URL + "models/kenney_car-kit/ModelsCoACDMeshes"; // Caminho base para os modelos

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
  constructor(name, position) {
    this.mesh = this.#makeMesh(name, position);

    const globalPos = new THREE.Vector3();
    this.mesh.getWorldPosition(globalPos);
    const globalQuat = new THREE.Quaternion();
    this.mesh.getWorldQuaternion(globalQuat);
    this.body = this.#makeBody(position, globalPos, globalQuat);
    this.collider = this.#makeCollider(position, globalPos, globalQuat);
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
    const colliderDesc = RAPIER.ColliderDesc.cylinder(0.5/2, 1)
      //.setTranslation(...globalPos) // para deslocar o colisor
      //.setRotation(globalQuat) // para alinhar o colisor com o mesh
      .setFriction(3)
      .setRestitution(0.1)
      .setDensity(0) // o colisor não contribuirá com massa
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    //.setCollisionGroups(131073); // importante para as joints 131073 = 0x00020001, pertence ao grupo 1 e pode colidir com o grupo 2
    return world.createCollider(colliderDesc, this.body);
  }
}
class CarChassis {
  mesh;
  body;
  collider;
  constructor(position) {
    this.mesh = this.#makeMesh(position);
    this.body = this.#makeBody(position);
    this.collider = this.#makeCollider(position);
  }
  #makeMesh(position) {
    const chassisMaterial = new THREE.MeshPhongMaterial({
      color: 0xAAA000,
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
  #makeBody(position){
     const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
       .setTranslation(position.x, position.y, position.z)
       //.setRotation()
       /* .setAdditionalMassProperties(
                1000, // mass
                { x: 0, y: 0, z: -4 }, // centerOfMass
                { x: 1453.3, y: 1666.7, z: 453.3 }, // Momentos de inércia aproximados (em kg·m²)   
                { w: 1, x: 0, y: 0, z: 0 } // Quat. identidade para o tensor (alinhado com os eixos do carro)
              ) */
       .setCanSleep(false);
     return world.createRigidBody(rigidBodyDesc);
  }
  #makeCollider(position) {
    const colliderDesc = RAPIER.ColliderDesc.cuboid(4 / 2, 3 / 2, 8 / 2)
      .setTranslation(position.x, position.y, position.z) // para deslocar o colisor
      .setFriction(3)
      .setRestitution(0.1)
      .setDensity(0) // o colisor não contribuirá com massa
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    //.setCollisionGroups(131073); // importante para as joints 131073 = 0x00020001, pertence ao grupo 1 e pode colidir com o grupo 2
    return world.createCollider(colliderDesc, this.body);
  }
}
class Car {
  CarGroup;
  CarChassis;
  CarWheels;
  wheelFL;
  wheelFR;
  wheelBL;
  wheelBR;
  constructor(t) {
    this.CarGroup = new THREE.Group();
    this.CarGroup.name = "car";
    this.CarChassis = new CarChassis({ x: 0, y: 0, z: 0 });
    this.wheelFL = new CarWheel("wheelFL", { x: -2.3, y: 0, z: 3 });
    this.wheelFR = new CarWheel("wheelFR", { x: 2.3, y: 0, z: 3 });
    this.wheelBL = new CarWheel("wheelBL", { x: -2.3, y: 0, z: -3 });
    this.wheelBR = new CarWheel("wheelBR", { x: 2.3, y: 0, z: -3 });
    this.CarWheels = new THREE.Group();
    this.CarWheels.name = "CarWheels";
    this.CarGroup.add(this.CarWheels);
    this.CarWheels.add(this.CarChassis.mesh);
    this.CarWheels.add(this.wheelFL.mesh);
    this.CarWheels.add(this.wheelFR.mesh);
    this.CarWheels.add(this.wheelBL.mesh);
    this.CarWheels.add(this.wheelBR.mesh);
  }
  async init(scene, world, position) {

    scene.add(this.CarGroup);
  }

  update(delta) {}
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
  65542
);
world.createCollider(floorShape, floorBody);

const car = new Car();
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
