import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import RAPIER from "@dimforge/rapier3d";
import { Lensflare, LensflareElement } from "three/addons/objects/Lensflare.js";
/* import { HDRJPGLoader } from "@monogrid/gainmap-js"; */

// collision groups
// floorShape = 0
// carShape = 1
// wheelShape = 2
// axelShape= 3
const modelPath = import.meta.env.BASE_URL + 'models/kenney_car-kit/Models/GLB_format';
console.log('modelPath:', modelPath);
const createSolidTexture = (color = '#ffffff') => {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 16, 16);
  return new THREE.CanvasTexture(canvas);
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

        const textureLoader = new THREE.TextureLoader();
        /* const textureFlare0 = textureLoader.load('img/lensflare0.png');
        const textureFlare3 = textureLoader.load('img/lensflare3.png'); */
        const textureFlare0 = createSolidTexture("#ffdd77"); // Cor âmbar
        const textureFlare3 = createSolidTexture("#ffffff"); // Branco puro

        /* const lensflareLeft = new Lensflare();
        lensflareLeft.addElement(new LensflareElement(textureFlare0, 1000, 0));
        lensflareLeft.addElement(new LensflareElement(textureFlare3, 500, 0.2));
        lensflareLeft.addElement(new LensflareElement(textureFlare3, 250, 0.8));
        lensflareLeft.addElement(new LensflareElement(textureFlare3, 125, 0.6));
        lensflareLeft.addElement(
          new LensflareElement(textureFlare3, 62.5, 0.4)
        );

        const lensflareRight = new Lensflare();
        lensflareRight.addElement(
          new LensflareElement(textureFlare0, 1000, 0)
        );
        lensflareRight.addElement(
          new LensflareElement(textureFlare3, 500, 0.2)
        );
        lensflareRight.addElement(
          new LensflareElement(textureFlare3, 250, 0.8)
        );
        lensflareRight.addElement(
          new LensflareElement(textureFlare3, 125, 0.6)
        );
        lensflareRight.addElement(
          new LensflareElement(textureFlare3, 62.5, 0.4)
        ); */

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
        wheelBLMesh.material.transparent = true;
        wheelBLMesh.material.opacity = 0.2;
        const wheelBRMesh = gltf.scene.getObjectByName("wheel-back-right");
        const wheelFLMesh = gltf.scene.getObjectByName("wheel-front-left");
        const wheelFRMesh = gltf.scene.getObjectByName("wheel-front-right");
        wheelBLMesh.position.set(0, 0, 0);
        wheelBRMesh.position.set(0, 0, 0);
        wheelFLMesh.position.set(0, 0, 0);
        wheelFRMesh.position.set(0, 0, 0);

        scene.add(carMesh, wheelBLMesh, wheelBRMesh, wheelFLMesh, wheelFRMesh);

        // create bodies for car, wheels and axels
        this.carBody = world.createRigidBody(
          RAPIER.RigidBodyDesc.dynamic()
            .setTranslation(...position)
            .setCanSleep(false)
          //.setAdditionalMass(1000)
          /* .setAdditionalMassProperties(
              1000, // mass
              { x: 0, y: 0, z: -4 }, // centerOfMass
              { x: 1453.3, y: 1666.7, z: 453.3 }, // Momentos de inércia aproximados (em kg·m²)
              { w: 1, x: 0, y: 0, z: 0 } // Quat. identidade para o tensor (alinhado com os eixos do carro)
            ) */
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

        //SECTION convexhull from all meshes in the carMesh group
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
        const carShape = RAPIER.ColliderDesc.convexMesh(
          new Float32Array(positions)
        )
          .setMass(1)
          .setRestitution(0.5)
          .setFriction(3)
          .setCollisionGroups(131073);
        //!SECTION
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
          .setCollisionGroups(589823); // pertece ao grupo 3 e pode colidir com o grupo 2
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
        this.wheelFLSus = world.createImpulseJoint(
          RAPIER.JointData.revolute(
            new RAPIER.Vector3(0, 0, 0),
            new RAPIER.Vector3(0, 0, 0),
            new RAPIER.Vector3(1, 0, 0)
          ),
          axelFLBody,
          wheelFLBody,
          true
        );
        this.wheelFRSus = world.createImpulseJoint(
          RAPIER.JointData.revolute(
            new RAPIER.Vector3(0, 0, 0),
            new RAPIER.Vector3(0, 0, 0),
            new RAPIER.Vector3(1, 0, 0)
          ),
          axelFRBody,
          wheelFRBody,
          true
        );
        let targetSteer = 0;
        let stiffness = 0;
        let damping = 0;
        let min_limit = -0.0;
        let max_limit = 0.0;
        let contacts = true;
        this.wheelFLSus.configureMotorPosition(targetSteer, stiffness, damping); // Rigidez de 20.000, amortecimento de 2.500
        this.wheelFLSus.setLimits(min_limit, max_limit); //min: number, max: number
        this.wheelFLSus.setContactsEnabled(contacts); // Controls whether contacts are computed between colliders attached to the rigid-bodies linked by this joint.

        this.wheelFRSus.configureMotorPosition(targetSteer, stiffness, damping);
        this.wheelFRSus.setLimits(min_limit, max_limit); //min: number, max: number
        this.wheelFRSus.setContactsEnabled(contacts); // Controls whether contacts are computed between colliders attached to the rigid-bodies linked by this joint.

        this.wheelBLMotor.configureMotorPosition(
          targetSteer,
          stiffness,
          damping
        );
        this.wheelBLMotor.setLimits(min_limit, max_limit); //min: number, max: number
        this.wheelBLMotor.setContactsEnabled(contacts); // Controls whether contacts are computed between colliders attached to the rigid-bodies linked by this joint.

        this.wheelBLMotor.configureMotorPosition(
          targetSteer,
          stiffness,
          damping
        );
        this.wheelBLMotor.setLimits(min_limit, max_limit); //min: number, max: number
        this.wheelBLMotor.setContactsEnabled(contacts); // Controls whether contacts are computed between colliders attached to the rigid-bodies linked by this joint.

        this.wheelFLAxel.configureMotorPosition(
          targetSteer,
          stiffness,
          damping
        ); //targetPos: number, stiffness: number, damping: number
        this.wheelFLAxel.setLimits(min_limit, max_limit); //min: number, max: number
        this.wheelFLAxel.setContactsEnabled(contacts); // Controls whether contacts are computed between colliders attached to the rigid-bodies linked by this joint.

        this.wheelFRAxel.configureMotorPosition(
          targetSteer,
          stiffness,
          damping
        );
        this.wheelFRAxel.setLimits(min_limit, max_limit); //min: number, max: number
        this.wheelFRAxel.setContactsEnabled(contacts); // Controls whether contacts are computed between colliders attached to the rigid-bodies linked by this joint.
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
      });
  }

  update(delta) {
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

    let targetVelocity = 0;
    if (this.keyMap["KeyW"]) {
      targetVelocity = 500;
    }
    if (this.keyMap["KeyS"]) {
      targetVelocity = -200;
    }
    this.wheelBLMotor.configureMotorVelocity(targetVelocity, 2.0);
    this.wheelBRMotor.configureMotorVelocity(targetVelocity, 2.0);

    let targetSteer = 0;
    if (this.keyMap["KeyA"]) {
      targetSteer += 0.6;
    }
    if (this.keyMap["KeyD"]) {
      targetSteer -= 0.6;
    }

    //this.wheelFLAxel.configureMotorPosition(targetSteer, 100000, 1000); //targetPos: number, stiffness: number, damping: number
    //this.wheelFRAxel.configureMotorPosition(targetSteer, 100000, 1000);
  }
}
// antes da revolute da roda da frente
/* const suspFL = world.createImpulseJoint(
  RAPIER.JointData.prismatic(
      new RAPIER.Vector3(-0.55, 0, -0.63), //frame car 
      new RAPIER.Vector3( 0, 0, 0), //frame wheel
      new RAPIER.Vector3(0, 1, 0))//eixo
    ). 
  configureSpring( 20_000,  2_500 ); //(stiffness,damping) */
  
class Box {
  dynamicBody;

  constructor(scene, world, position) {
    const boxMesh = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshStandardMaterial()
    );
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    const boxBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic().setTranslation(...position)
    );

    const boxShape = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5)
      .setRestitution(0.5)
      .setMass(0.1);
    world.createCollider(boxShape, boxBody);

    this.dynamicBody = [boxMesh, boxBody];
  }

  update() {
    this.dynamicBody[0].position.copy(this.dynamicBody[1].translation());
    this.dynamicBody[0].quaternion.copy(this.dynamicBody[1].rotation());
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
const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)', 0.2);
scene.add(ambientLight);
/* await new HDRJPGLoader(renderer)
  .loadAsync("/img/venice_sunset_1k.hdr.jpg")
  .then((texture) => {
    texture.renderTarget.texture.mapping =
      THREE.EquirectangularReflectionMapping;
    scene.environment = texture.renderTarget.texture;
    scene.environmentIntensity = 0.1; // new in Three r163. https://threejs.org/docs/#api/en/scenes/Scene.environmentIntensity
  }); */

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

const boxes = [];
for (let x = 0; x < 8; x += 1) {
  for (let y = 0; y < 8; y += 1) {
    boxes.push(new Box(scene, world, [(x - 4) * 1.2, y + 1, -20]));
  }
}

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

  boxes.forEach((b) => b.update());

  rapierDebugRenderer.update();

  renderer.render(scene, camera);

  stats.update();
}

animate();
