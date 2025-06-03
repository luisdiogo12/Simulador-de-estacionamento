import * as THREE from "three";
import {
  World,
  RigidBody,
  Vector3,
  DynamicRayCastVehicleController,
} from "@dimforge/rapier3d";
import RAPIER from "@dimforge/rapier3d";

// Configuração inicial
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luzes
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 10, 0);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// Criação do carro
class SimpleCar {
  constructor() {
    // 1. Meshes Three.js
    this.chassisMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2, 1, 4),
      new THREE.MeshPhongMaterial({ color: 0xff0000 })
    );

    this.wheelMeshes = Array(4)
      .fill()
      .map(
        () =>
          new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.3, 0.2, 16),
            new THREE.MeshPhongMaterial({ color: 0x333333 })
          )
      );

    // Posicionamento inicial das rodas
    this.wheelMeshes.forEach((wheel, i) => {
      wheel.rotation.x = Math.PI / 2; // Rotaciona cilindro para parecer roda
      scene.add(wheel);
    });

    scene.add(this.chassisMesh);

    // 2. Configuração física
    this.world = new World({ gravity: new Vector3(0, -9.81, 0) });

    // Corpo rígido do chassis
    this.chassisBody = this.world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 2, 0)
    );

    // Controlador do veículo
    this.vehicle = new DynamicRayCastVehicleController(
      this.chassisBody,
      this.world.bodies,
      this.world.colliders,
      this.world.queryPipeline
    );

    // Configura eixos
    this.vehicle.setindexForwardAxis = 2; // Eixo Z como frente
    this.vehicle.indexUpAxis = 1; // Eixo Y como cima

    // Adiciona rodas
    const wheelOffsets = [
      new Vector3(0.8, 0.2, 1.5), // Dianteira esquerda
      new Vector3(-0.8, 0.2, 1.5), // Dianteira direita
      new Vector3(0.8, 0.2, -1.5), // Traseira esquerda
      new Vector3(-0.8, 0.2, -1.5), // Traseira direita
    ];

    wheelOffsets.forEach((offset, i) => {
      this.vehicle.addWheel(
        offset,
        new Vector3(0, -1, 0), // Direção da suspensão
        new Vector3(i % 2 === 0 ? -1 : 1, 0, 0), // Eixo da roda
        0.3, // Suspensão rest length
        0.3 // Raio da roda
      );
    });

    // Controles
    this.keyStates = { KeyW: false, KeyS: false, KeyA: false, KeyD: false };
    document.addEventListener(
      "keydown",
      (e) => (this.keyStates[e.code] = true)
    );
    document.addEventListener("keyup", (e) => (this.keyStates[e.code] = false));
  }

  update(delta) {
    // Controles
    let engineForce = 0;
    let steering = 0;

    if (this.keyStates.KeyW) engineForce = 100;
    if (this.keyStates.KeyS) engineForce = -50;
    if (this.keyStates.KeyA) steering = 0.5;
    if (this.keyStates.KeyD) steering = -0.5;

    // Aplica forças nas rodas traseiras (2 e 3)
    this.vehicle.setWheelEngineForce(2, engineForce);
    this.vehicle.setWheelEngineForce(3, engineForce);

    // Aplica direção nas rodas dianteiras (0 e 1)
    this.vehicle.setWheelSteering(0, steering);
    this.vehicle.setWheelSteering(1, steering);

    // Atualiza física
    this.vehicle.updateVehicle(delta);
    this.world.timestep = delta;
    this.world.step();

    // Atualiza meshes
    this.updateMeshes();
  }

  updateMeshes() {
    // Atualiza chassis
    this.chassisMesh.position.copy(this.chassisBody.translation());
    this.chassisMesh.quaternion.copy(this.chassisBody.rotation());

    // Atualiza rodas - Métodos corretos
    for (let i = 0; i < this.vehicle.numWheels(); i++) {
      // Posição da roda no espaço do chassis
      const wheelPosLocal = this.vehicle.wheelChassisConnectionPointCs(i);

      // Converter para espaço mundial
      const wheelPosWorld = this.chassisBody
        .translation()
        .add(this.chassisBody.rotation().rotate(wheelPosLocal));

      // Rotação da roda
      const wheelRot = this.vehicle.wheelRotation(i);

      // Aplicar às meshes
      this.wheelMeshes[i].position.copy(wheelPosWorld);
      this.wheelMeshes[i].rotation.z = wheelRot; // Rotação em torno do eixo Z
    }
  }
}

// Inicialização
const car = new SimpleCar();
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// Loop de animação
function animate() {
  requestAnimationFrame(animate);
  car.update(0.016); // ~60 FPS
  renderer.render(scene, camera);
}

animate();
