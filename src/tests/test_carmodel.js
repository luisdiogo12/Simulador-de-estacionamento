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
const wheelSettings = {
  suspensionStiffness: 30.0,   // Rigidez da suspensão
  suspensionDamping: 2.3,      // Amortecimento
  suspensionCompression: 4.4,  // Compressão
  maxSuspensionTravel: 0.3,    // Curso máximo
  frictionSlip: 10.5           // Atrito
};

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
class Car {
  followTarget = new THREE.Object3D();
  lightLeftTarget = new THREE.Object3D();
  lightRightTarget = new THREE.Object3D();
  keyMap; // para receber os eventos de teclado para controlar o carro
  pivot; //!: ????
  chassiRB;
  chassiCol;
  carGroup;
  wheelBLMotor;
  wheelBRMotor;
  wheelFLAxel;
  wheelFRAxel;
  vehicleController;

  constructor(keyMap, pivot) {
    this.followTarget.position.set(0, 0.5, 0);
    this.lightLeftTarget.position.set(-0.35, 1, -10);
    this.lightRightTarget.position.set(0.35, 1, -10);
    this.keyMap = keyMap;
    this.pivot = pivot;
  }
  async init(scene, world, position) {
    let chassiMesh;
    let wheelBLMesh;
    let wheelBRMesh;
    let wheelFLMesh;
    let wheelFRMesh;
    const gltf = await new GLTFLoader()
      .loadAsync(`${modelPath}/sedan-sports.glb`)
      .then((gltf) => {
        console.log("Objetos disponíveis no modelo:");
        gltf.scene.traverse((obj) => {
          console.log(`- Nome: ${obj.name}, Tipo: ${obj.type}`);
        });
        this.carGroup = gltf.scene.getObjectByName("sedan-sports");
        this.carGroup.position.set(...position);
        logObject(gltf.scene.getObjectByName("sedan-sports"));
        chassiMesh = gltf.scene.getObjectByName("body");
        wheelBLMesh = gltf.scene.getObjectByName("wheel-back-left");
        wheelBRMesh = gltf.scene.getObjectByName("wheel-back-right");
        wheelFLMesh = gltf.scene.getObjectByName("wheel-front-left");
        wheelFRMesh = gltf.scene.getObjectByName("wheel-front-right");
        return gltf;
      });
    console.log("gltf", gltf);
    const hullGroup = await new OBJLoader()
      .loadAsync(`${CoACDmodelPath}/sedan-sports-bodyandspoiler-output2.obj`)
      .then((obj) => {
        return obj;
      });
    console.log("hullGroup", hullGroup);
    logObject(hullGroup);
    //
    //
    //
    scene.updateMatrixWorld(true); // garante matrizes actualizadas
    const chassiGlobalPos = new THREE.Vector3();
    const chassiGlobalQuat = new THREE.Quaternion();
    chassiMesh.getWorldPosition(chassiGlobalPos);
    chassiMesh.getWorldQuaternion(chassiGlobalQuat);
    console.log("chassiGlobalPos", chassiGlobalPos);
    console.log("chassiGlobalQuat", chassiGlobalQuat);
    // create a convexhull from all meshes in the chassiMesh group
    chassiMesh.updateMatrixWorld(true); // ensure world matrix is up to date

    const chassiBD = RAPIER.RigidBodyDesc.dynamic()
      //.setTranslation(chassiGlobalPos.x, chassiGlobalPos.y, chassiGlobalPos.z)
      .setTranslation(...chassiGlobalPos)
      .setRotation(chassiGlobalQuat)
      /* .setAdditionalMassProperties(
            1000, // mass
            { x: 0, y: 0, z: -4 }, // centerOfMass
            { x: 1453.3, y: 1666.7, z: 453.3 }, // Momentos de inércia aproximados (em kg·m²)   
            { w: 1, x: 0, y: 0, z: 0 } // Quat. identidade para o tensor (alinhado com os eixos do carro)
          ) */
      .setCanSleep(false);
    /* 
    const worldVerts = [];
    const localVerts = [];
    chassiMesh.traverse((o) => {
      if (!o.isMesh) return;

      const posAttr = o.geometry.getAttribute("position");
      for (let i = 0; i < posAttr.count; i++) {
        // ── W O R L D  S P A C E ──
        const w = new THREE.Vector3()
          .fromBufferAttribute(posAttr, i)
          .applyMatrix4(o.matrixWorld);
        worldVerts.push(w.x, w.y, w.z);

        // ── L O C A L  (relativo ao chassis) ──
        localVerts.push(
          w.x - chassiGlobalPos.x,
          w.y - chassiGlobalPos.y,
          w.z - chassiGlobalPos.z
        );
      }
    });
    console.log("worldVerts", worldVerts); // para debug
    console.log("localVerts", localVerts); // usa no convexMesh
    const chassiCD = RAPIER.ColliderDesc.convexMesh(
      new Float32Array(worldVerts)
    )
      //.setMass(1)
      //.setTranslation(chassiGlobalPos.x, chassiGlobalPos.y, chassiGlobalPos.z)
      .setRestitution(0.5) // para o carro saltar
      .setFriction(3) // para o carro não escorregar
      .setCollisionGroups(131073); // importante para as joints 131073 = 0x00020001, pertence ao grupo 1 e pode colidir com o grupo 2

    this.chassiRB = world.createRigidBody(chassiBD);
    this.chassiCol = world.createCollider(
      chassiCD,
      this.chassiRB
    ); */
    //
    // OUTRO METODO
    //
    this.chassiRB = world.createRigidBody(chassiBD);
    hullGroup.traverse((obj) => {
      if (!obj.isMesh) return;

      const verts = new Float32Array(
        obj.geometry.getAttribute("position").array
      );
      console.log("verts", verts);

      const col = RAPIER.ColliderDesc.convexMesh(verts)
        .setFriction(3)
        .setRestitution(0.1)
        .setTranslation(
          obj.position.x + chassiGlobalPos.x,
          obj.position.y + chassiGlobalPos.y,
          obj.position.z + chassiGlobalPos.z
        )
        .setCollisionGroups(131073); // importante para as joints 131073 = 0x00020001, pertence ao grupo 1 e pode colidir com o grupo 2

      world.createCollider(col, this.chassiRB);
    });

    this.vehicleController = world.createVehicleController(this.chassiRB);
    // obter chassiConnectionsCs
    /* const wheelPosition = new THREE.Vector3();
    wheelBLMesh.getWorldPosition(wheelPosition); // Posição mundial da roda
    this.carGroup.worldToLocal(wheelPosition); // Converte para espaço local do chassis
    console.log("chassisConnectionCs:", wheelPosition); */
    // outra forma obter chassiConnectionsCs
    const chassiConnectionsCs = wheelBLMesh.position;
    console.log(wheelBLMesh.position);
    // obter directionCs - Se o chassis está orientado com Y para cima, use (0, -1, 0)
    const directionCs = new RAPIER.Vector3(0, -1, 0); // Padrão: suspensão apontando para baixo
    // obter axleCs - Se a roda está rotacionada 90 graus em torno do eixo Z, o eixo de rotação é X
    const axleCs = new RAPIER.Vector3(-1, 0, 0); // Roda esquerda , (1, 0, 0) roda direita
    // obter suspensionRestLength
    const suspensionRestLength = wheelBLMesh.position.y; // Posição Y da roda relativa ao chassis
    // obter radius - Se a roda está visualmente "pendurada" abaixo do chassis:
    const geometry = wheelBLMesh.geometry;
    geometry.computeBoundingSphere(); // Calcula a esfera delimitadora
    const radius = geometry.boundingSphere.radius;
    console.log("wheelBLMesh radius", radius);
    const scale = wheelBLMesh.scale;
    const effectiveRadius = radius * Math.max(scale.x, scale.y, scale.z);
    console.log("wheelBLMesh effectiveRadius", effectiveRadius);
    this.vehicleController.addWheel(
      chassiConnectionsCs, // position of the wheel relative to the chassis
      directionCs, // direction of the wheel’s suspension, relative to the chassis. The ray-casting will happen following this direction to detect the ground
      axleCs, // wheel’s axle axis, relative to the chassis
      suspensionRestLength, // rest length of the wheel’s suspension spring
      radius // wheel’s radius
    );

    //Sets the chassis’ local up direction (0 = x, 1 = y, 2 = z).
    //this.vehicleController.indexUpAxis =  number;

    //Sets the chassis’ local forward direction (0 = x, 1 = y, 2 = z).
    //this.vehicleController.setIndexForwardAxis =  number;

    //Sets the i-th wheel’s axle axis, relative to the chassis.
    //this.vehicleController.setWheelAxleCs({i: number, value: Vector});

    //Set the maximum amount of braking impulse applied on the i-th wheel to slow down the vehicle.
    //this.vehicleController.setWheelBrake({i: number, value: number});

    //Sets the position of the i-th wheel, relative to the chassis.
    //this.vehicleController.setWheelChassisConnectionPointCs({i: number, value: Vector});

    //Sets the direction of the i-th wheel’s suspension, relative to the chassis.The ray-casting will happen following this direction to detect the ground.
    //this.vehicleController.setWheelDirectionCs({i: number, value: Vector});

    //Sets the forward force applied by the i-th wheel on the chassis.
    //this.vehicleController.setWheelEngineForce({i: number, value: number});

    //Sets the parameter controlling how much traction the tire has.The larger the value, the more instantaneous braking will happen (with the risk of causing the vehicle to flip if it’s too strong).
    //this.vehicleController.setWheelFrictionSlip({i: number, value: number});

    //Sets the maximum force applied by the i-th wheel’s suspension.
    //this.vehicleController.setWheelMaxSuspensionForce({i: number, value: number});

    //Sets the maximum distance the i-th wheel suspension can travel before and after its resting length.

    //this.vehicleController.setWheelMaxSuspensionTravel({i: number, value: number});

    //Sets the i-th wheel’s radius.
    //this.vehicleController.setWheelRadius({i: number, value: number});

    //The multiplier of friction between a tire and the collider it’s on top of.The larger the value, the stronger side friction will be.
    //this.vehicleController.setWheelSideFrictionStiffness({i: number, value: number});

    //Sets the steering angle (radians) for the i-th wheel.
    //this.vehicleController.setWheelSteering({i: number, value: number});

    //The i-th wheel’s suspension’s damping when it is being compressed.
    //this.vehicleController.setWheelSuspensionCompression({i: number, value: number});

    //Sets the i-th wheel’s suspension’s damping when it is being released.Increase this value if the suspension appears to overshoot.
    //this.vehicleController.setWheelSuspensionRelaxation({i: number, value: number});

    //Sets the rest length of the i-th wheel’s suspension spring.
    //this.vehicleController.setWheelSuspensionRestLength({i: number, value: number});

    //Sets the i-th wheel’s suspension stiffness.Increase this value if the suspension appears to not push the vehicle strong enough.
    //this.vehicleController.setWheelSuspensionStiffness({i: number, value: number});

    //Updates the vehicle’s velocity based on its suspension, engine force, and brake.This directly updates the velocity of its chassis rigid-body.
    //this.vehicleController.updateVehicle({dt: number, filterFlags?: QueryFilterFlags, filterGroups?: number, filterPredicate?: ((collider: Collider) => boolean)});

    console.log("this.vehicleController", this.vehicleController);
    scene.add(this.carGroup);
  }

  update(delta) {
    // 1. Atualizar física do veículo
    if (this.vehicleController) {
      // Aplicar controles
      let engineForce = 0;
      let steering = 0;

      if (this.keyMap["KeyW"]) engineForce = 500;
      if (this.keyMap["KeyS"]) engineForce = -200;
      if (this.keyMap["KeyA"]) steering = 0.6;
      if (this.keyMap["KeyD"]) steering = -0.6;

      // Configurar rodas traseiras (motor)
      this.vehicleController.setWheelEngineForce(2, engineForce); // Roda traseira esquerda
      this.vehicleController.setWheelEngineForce(3, engineForce); // Roda traseira direita

      // Configurar rodas dianteiras (direção)
      this.vehicleController.setWheelSteering(0, steering); // Roda dianteira esquerda
      this.vehicleController.setWheelSteering(1, steering); // Roda dianteira direita

      // Atualizar simulação
      this.vehicleController.updateVehicle(delta);
    }

    // 2. Sincronizar meshes 3D com corpos físicos
    if (this.chassiRB && this.carGroup) {
      // Atualizar chassis
      const chassisPos = this.chassiRB.translation();
      const chassisRot = this.chassiRB.rotation();

      this.carGroup.position.set(chassisPos.x, chassisPos.y, chassisPos.z);
      this.carGroup.quaternion.set(
        chassisRot.x,
        chassisRot.y,
        chassisRot.z,
        chassisRot.w
      );

      // Atualizar pivot (câmera)
      if (this.pivot) {
        const pivotPos = new THREE.Vector3();
        this.followTarget.getWorldPosition(pivotPos);
        this.pivot.position.lerp(pivotPos, delta * 5);
      }
    }

    // 3. Atualizar rodas (exemplo para 4 rodas)
    const updateWheel = (wheelIndex, wheelMesh) => {
      if (!wheelMesh || !this.vehicleController) return;

      // Obter posição e rotação da roda
      const wheelPos = this.vehicleController.wheelPosition(wheelIndex);
      const wheelRot = this.vehicleController.wheelRotation(wheelIndex);

      // Converter para Three.js
      wheelMesh.position.set(wheelPos.x, wheelPos.y, wheelPos.z);
      wheelMesh.quaternion.set(wheelRot.x, wheelRot.y, wheelRot.z, wheelRot.w);
    };

    updateWheel(0, this.wheelFLMesh); // Dianteira esquerda
    updateWheel(1, this.wheelFRMesh); // Dianteira direita
    updateWheel(2, this.wheelBLMesh); // Traseira esquerda
    updateWheel(3, this.wheelBRMesh); // Traseira direita
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
camera.position.set(0, 0, 4);

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

const car = new Car(keyMap, pivot);
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
