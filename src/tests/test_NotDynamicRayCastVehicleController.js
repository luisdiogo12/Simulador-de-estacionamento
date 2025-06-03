import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import RAPIER from "@dimforge/rapier3d";

const modelPath =
  import.meta.env.BASE_URL + "models/kenney_car-kit/Models/GLB_format";

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
class Car {
  dynamicBodies = [];
  followTarget = new THREE.Object3D();
  lightLeftTarget = new THREE.Object3D();
  lightRightTarget = new THREE.Object3D();
  carBody;
  wheelBLMotor;
  wheelBRMotor;
  wheelFLAxel;
  wheelFRAxel;
  v = new THREE.Vector3();
  keyMap;
  pivot;
  vehicleController; // Nova propriedade

  constructor(keyMap, pivot) {
    this.followTarget.position.set(0, 0.5, 0);
    this.lightLeftTarget.position.set(-0.35, 1, -10);
    this.lightRightTarget.position.set(0.35, 1, -10);
    this.keyMap = keyMap;
    this.pivot = pivot;
  }
  async init(scene, world, position) {
    await new GLTFLoader()
      .loadAsync(`${modelPath}/sedanSports.glb`)
      .then((gltf) => {
        console.log("Objetos disponíveis no modelo:");
        gltf.scene.traverse((obj) => {
          if (obj.isMesh || obj.isGroup) {
            console.log(`- Nome: ${obj.name}, Tipo: ${obj.type}`);
          }
        });
      });

    await new GLTFLoader()
      .loadAsync(`${modelPath}/sedan-sports.glb`)
      .then((gltf) => {
        console.log("Objetos disponíveis no modelo:");
        gltf.scene.traverse((obj) => {
          if (obj.isMesh || obj.isGroup) {
            console.log(`- Nome: ${obj.name}, Tipo: ${obj.type}`);
          }
        });
        const carMesh = gltf.scene.getObjectByName("body");
        carMesh.position.set(0, 0, 0);
        carMesh.traverse((o) => {
          o.castShadow = true;
        });

        carMesh.add(this.followTarget);
        const headLightLeft = new THREE.SpotLight(undefined, Math.PI * 20);
        headLightLeft.position.set(-0.4, 0.5, -1.01);
        headLightLeft.angle = Math.PI / 4;
        headLightLeft.penumbra = 0.5;
        headLightLeft.castShadow = true;
        headLightLeft.shadow.blurSamples = 10;
        headLightLeft.shadow.radius = 5;

        const headLightRight = headLightLeft.clone();
        headLightRight.position.set(0.4, 0.5, -1.01);

        carMesh.add(headLightLeft);
        headLightLeft.target = this.lightLeftTarget;
        //headLightLeft.add(lensflareLeft);
        carMesh.add(this.lightLeftTarget);

        carMesh.add(headLightRight);
        headLightRight.target = this.lightRightTarget;
        //headLightRight.add(lensflareRight);
        carMesh.add(this.lightRightTarget);

        const wheelBLMesh = gltf.scene.getObjectByName("wheel-back-left");
        const wheelBRMesh = gltf.scene.getObjectByName("wheel-back-right");
        const wheelFLMesh = gltf.scene.getObjectByName("wheel-front-left");
        const wheelFRMesh = gltf.scene.getObjectByName("wheel-front-right");
        wheelBLMesh.position.set(0, 0, 0);
        wheelBRMesh.position.set(0, 0, 0);
        wheelFLMesh.position.set(0, 0, 0);
        wheelFRMesh.position.set(0, 0, 0);

        scene.add(carMesh, wheelBLMesh, wheelBRMesh, wheelFLMesh, wheelFRMesh);
      });
    // 1. Criar chassis (substitui o carBody antigo)
    this.carBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(...position)
        .setCanSleep(false)
    );
    // 2. Inicializar o VehicleController
    this.vehicleController = new RAPIER.DynamicRayCastVehicleController(
      this.carBody,
      world
    );
    // 3. Configurar parâmetros globais do veículo
    this.vehicleController.setSuspensionStiffness(35.0);
    this.vehicleController.setSuspensionDamping(2.5);
    this.vehicleController.setSuspensionCompression(4.0);
    // 4. Adicionar rodas com raycasting
    this.addWheel({
      chassisConnection: new THREE.Vector3(-0.55, 0.0, 0.63), // Traseira esquerda
      isFront: false,
      radius: 0.3,
    });

    this.addWheel({
      chassisConnection: new THREE.Vector3(0.55, 0.0, 0.63), // Traseira direita
      isFront: false,
      radius: 0.3,
    });

    this.addWheel({
      chassisConnection: new THREE.Vector3(-0.55, 0.0, -0.63), // Dianteira esquerda
      isFront: true,
      radius: 0.3,
    });

    this.addWheel({
      chassisConnection: new THREE.Vector3(0.55, 0.0, -0.63), // Dianteira direita
      isFront: true,
      radius: 0.3,
    });
    // ... (restante do código de colisores e modelos 3D mantido)
    // create bodies for car, wheels and axels
    this.carBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(...position)
        .setCanSleep(false)
    );

    const wheelBLBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(position[0] - 0.55, position[1], position[2] + 0.63)
        .setCanSleep(false)
    );
    const wheelBRBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(position[0] + 0.55, position[1], position[2] + 0.63)
        .setCanSleep(false)
    );

    const axelFLBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(position[0] - 0.55, position[1], position[2] - 0.63)
        .setCanSleep(false)
    );
    const axelFRBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(position[0] + 0.55, position[1], position[2] - 0.63)
        .setCanSleep(false)
    );

    const wheelFLBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(position[0] - 0.55, position[1], position[2] - 0.63)
        .setCanSleep(false)
    );
    const wheelFRBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(position[0] + 0.55, position[1], position[2] - 0.63)
        .setCanSleep(false)
    );

    // create a convexhull from all meshes in the carMesh group
    const v = new THREE.Vector3();
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
    });

    // create shapes for carBody, wheelBodies and axelBodies
    const carShape = RAPIER.ColliderDesc.convexMesh(new Float32Array(positions))
      .setMass(1)
      .setRestitution(0.5)
      .setFriction(3)
      .setCollisionGroups(131073);
    const wheelBLShape = RAPIER.ColliderDesc.cylinder(0.1, 0.3)
      .setRotation(
        new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 0, 1),
          -Math.PI / 2
        )
      )
      .setTranslation(-0.2, 0, 0)
      .setRestitution(0.5)
      .setFriction(2)
      .setCollisionGroups(262145);
    const wheelBRShape = RAPIER.ColliderDesc.cylinder(0.1, 0.3)
      .setRotation(
        new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 0, 1),
          Math.PI / 2
        )
      )
      .setTranslation(0.2, 0, 0)
      .setRestitution(0.5)
      .setFriction(2)
      .setCollisionGroups(262145);
    const wheelFLShape = RAPIER.ColliderDesc.cylinder(0.1, 0.3)
      .setRotation(
        new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 0, 1),
          Math.PI / 2
        )
      )
      .setTranslation(-0.2, 0, 0)
      .setRestitution(0.5)
      .setFriction(2.5)
      .setCollisionGroups(262145);
    const wheelFRShape = RAPIER.ColliderDesc.cylinder(0.1, 0.3)
      .setRotation(
        new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 0, 1),
          Math.PI / 2
        )
      )
      .setTranslation(0.2, 0, 0)
      .setRestitution(0.5)
      .setFriction(2.5)
      .setCollisionGroups(262145);
    const axelFLShape = RAPIER.ColliderDesc.cuboid(0.1, 0.1, 0.1)
      .setRotation(
        new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 0, 1),
          Math.PI / 2
        )
      )
      .setMass(0.1)
      .setCollisionGroups(589823);
    const axelFRShape = RAPIER.ColliderDesc.cuboid(0.1, 0.1, 0.1)
      .setRotation(
        new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 0, 1),
          Math.PI / 2
        )
      )
      .setMass(0.1)
      .setCollisionGroups(589823);

    // attach back wheel to cars. These will be configurable motors.
    this.wheelBLMotor = world.createImpulseJoint(
      RAPIER.JointData.revolute(
        new RAPIER.Vector3(-0.55, 0, 0.63),
        new RAPIER.Vector3(0, 0, 0),
        new RAPIER.Vector3(-1, 0, 0)
      ),
      this.carBody,
      wheelBLBody,
      true
    );
    this.wheelBRMotor = world.createImpulseJoint(
      RAPIER.JointData.revolute(
        new RAPIER.Vector3(0.55, 0, 0.63),
        new RAPIER.Vector3(0, 0, 0),
        new RAPIER.Vector3(-1, 0, 0)
      ),
      this.carBody,
      wheelBRBody,
      true
    );

    // attach steering axels to car. These will be configurable motors.
    this.wheelFLAxel = world.createImpulseJoint(
      RAPIER.JointData.revolute(
        new RAPIER.Vector3(-0.55, 0, -0.63),
        new RAPIER.Vector3(0, 0, 0),
        new RAPIER.Vector3(0, 1, 0)
      ),
      this.carBody,
      axelFLBody,
      true
    );
    this.wheelFLAxel.configureMotorModel(RAPIER.MotorModel.ForceBased);
    this.wheelFRAxel = world.createImpulseJoint(
      RAPIER.JointData.revolute(
        new RAPIER.Vector3(0.55, 0, -0.63),
        new RAPIER.Vector3(0, 0, 0),
        new RAPIER.Vector3(0, 1, 0)
      ),
      this.carBody,
      axelFRBody,
      true
    );
    this.wheelFRAxel.configureMotorModel(RAPIER.MotorModel.ForceBased);

    // // attach front wheel to steering axels
    world.createImpulseJoint(
      RAPIER.JointData.revolute(
        new RAPIER.Vector3(0, 0, 0),
        new RAPIER.Vector3(0, 0, 0),
        new RAPIER.Vector3(1, 0, 0)
      ),
      axelFLBody,
      wheelFLBody,
      true
    );
    world.createImpulseJoint(
      RAPIER.JointData.revolute(
        new RAPIER.Vector3(0, 0, 0),
        new RAPIER.Vector3(0, 0, 0),
        new RAPIER.Vector3(1, 0, 0)
      ),
      axelFRBody,
      wheelFRBody,
      true
    );

    // create world collider
    world.createCollider(carShape, this.carBody);
    world.createCollider(wheelBLShape, wheelBLBody);
    world.createCollider(wheelBRShape, wheelBRBody);
    world.createCollider(wheelFLShape, wheelFLBody);
    world.createCollider(wheelFRShape, wheelFRBody);
    world.createCollider(axelFLShape, axelFLBody);
    world.createCollider(axelFRShape, axelFRBody);

    // update local dynamicBodies so mesh positions and quaternions are updated with the physics world info
    this.dynamicBodies.push([carMesh, this.carBody]);
    this.dynamicBodies.push([wheelBLMesh, wheelBLBody]);
    this.dynamicBodies.push([wheelBRMesh, wheelBRBody]);
    this.dynamicBodies.push([wheelFLMesh, wheelFLBody]);
    this.dynamicBodies.push([wheelFRMesh, wheelFRBody]);
    this.dynamicBodies.push([new THREE.Object3D(), axelFRBody]);
    this.dynamicBodies.push([new THREE.Object3D(), axelFLBody]);
  }
  // Método auxiliar para adicionar rodas
  addWheel({ chassisConnection, isFront, radius }) {
    const wheelIndex = this.vehicleController.addWheel({
      chassisConnectionLocal: chassisConnection,
      directionLocal: new THREE.Vector3(0, -1, 0),
      axleLocal: new THREE.Vector3(isFront ? 0 : -1, 0, 0),
      suspensionRestLength: 0.3,
      radius,
      maxSuspensionForce: 1000,
      steering: isFront,
    });

    return wheelIndex;
  }

  update(delta) {
    // 1. Atualizar posições dos modelos 3D (mantido)
    for (let i = 0, n = this.dynamicBodies.length; i < n; i++) {
      this.dynamicBodies[i][0].position.copy(
        this.dynamicBodies[i][1].translation()
      );
      this.dynamicBodies[i][0].quaternion.copy(
        this.dynamicBodies[i][1].rotation()
      );
    }

    this.followTarget.getWorldPosition(this.v);
    this.pivot.position.lerp(this.v, delta * 5);

    // 2. Controles do veículo (substitui o sistema antigo de joints)
    let engineForce = 0;
    let steering = 0;

    if (this.keyMap["KeyW"]) engineForce = 1000;
    if (this.keyMap["KeyS"]) engineForce = -500;
    if (this.keyMap["KeyA"]) steering = 0.5;
    if (this.keyMap["KeyD"]) steering = -0.5;

    // Aplicar força nas rodas traseiras (índices 0 e 1)
    this.vehicleController.setEngineForce(engineForce, 0);
    this.vehicleController.setEngineForce(engineForce, 1);

    // Aplicar direção nas rodas dianteiras (índices 2 e 3)
    this.vehicleController.setSteeringValue(steering, 2);
    this.vehicleController.setSteeringValue(steering, 3);

    // 3. Atualizar controlador
    this.vehicleController.update(world);
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
