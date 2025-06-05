import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { bool } from "three/tsl";

import { IS_DEBUG } from "debugManager";

//TODO :  por variaveis como parametros da classe
const mass = 10;
const restitution = 0.8;
const wheelSuspensionStiffness = 24;
const wheelFrictionSlip = 1000;

//FIXME provisorio
const chassisColor = 0xff0000;
const chassisTransparency = false;
const chassisOpacity = 0.9;
const wheelColor = 0x404040;
const wheelTransparency = false;
const wheelOpacity = 0.9;

const chassisSize = new THREE.Vector3(2, 1, 4);
const wheelRadius = 0.5;
const wheelWidth = 0.4;
const wheelsPositions = [
  { x: -1, y: 0, z: -1.5 },
  { x: 1, y: 0, z: -1.5 },
  { x: -1, y: 0, z: 1.5 },
  { x: 1, y: 0, z: 1.5 },
];
export class Car {
  rapierDebugRender;
  world;
  scene;
  options;
  chassisMesh;
  chassisBody;
  chassisCollider;
  controller;
  wheels;
  movement;
  constructor(
    scene,
    sceneManager,
    world,
    physicsManager,
    options = {},
    rapierDebugRender
  ) {
    if (IS_DEBUG && !rapierDebugRender) {
      console.warn("rapierDebugRender não foi passado para a classe Car.");
    }
    this.rapierDebugRender = rapierDebugRender;
    this.movement = {
      forward: 0,
      right: 0,
      brake: 0,
      reset: false,
      accelerateForce: { value: 0, min: -30, max: 30, step: 1 },
      brakeForce: { value: 0, min: 0, max: 1, step: 0.05 },
      lightsOn: 0, //TODO
    };
    this.scene = scene;
    this.sceneManager = sceneManager;
    this.world = world;
    this.physicsManager = physicsManager;
    this.options = {
      chassisSize: chassisSize,
      wheelRadius: wheelRadius,
      wheelWidth: wheelWidth,
      ...options,
    };

    this.initChassis();
    this.initWheels();
    if (IS_DEBUG && this.rapierDebugRender) {
      this.rapierDebugRender.addVehicle(this.chassisBody, this.controller);
    } else if (IS_DEBUG) {
      console.warn("rapierDebugRender não está inicializado.");
    }
  }

  initChassis() {
    // Mesh Three.js
    this.chassisMesh = new THREE.Mesh(
      new THREE.BoxGeometry(...this.options.chassisSize.toArray()),
      new THREE.MeshPhongMaterial({
        color: chassisColor,
        transparent: chassisTransparency,
        opacity: chassisOpacity,
      })
    );
    if (this.options.chassisPosition) {
      this.chassisMesh.position.copy(this.options.chassisPosition);
      this.spawnPos = this.options.chassisPosition.clone();
    } else {
      this.chassisMesh.position.set(0, 3, 0);
      this.spawnPos = new THREE.Vector3(0, 3, 0);
    }
    /* if (this.options.chassisRotation) {
      this.chassisMesh.rotation.copy(this.options.chassisRotation);
    } */
    this.chassisMesh.castShadow = true; //TODO isto devia estar em sceneManager.addToScene
    this.sceneManager.addToScene(this.chassisMesh);
    this.follow_target = this.chassisMesh;

    //physics.addMesh(mesh, 10, 0.8);
    const colliderDesc = RAPIER.ColliderDesc.cuboid(
      this.options.chassisSize.x / 2,
      this.options.chassisSize.y / 2,
      this.options.chassisSize.z / 2
    );
    colliderDesc.setMass(mass);
    colliderDesc.setRestitution(restitution);
    const chassisDesc = RAPIER.RigidBodyDesc.dynamic();
    console.log("this.chassisMesh.position", this.chassisMesh.position);
    console.log("this.chassisMesh.quaternion", this.chassisMesh.quaternion);
    chassisDesc.setTranslation(...this.chassisMesh.position.toArray());
    /* const q = this.chassisMesh.quaternion; 
    console.log("this.chassisMesh.quaternion", q);
    chassisDesc.setRotation(q.x, q.y, q.z, q.w); */
    //chassisDesc.setRotation(1,0,0,0);
    this.chassisBody = this.world.createRigidBody(chassisDesc);
    this.chassisBody.userData = { name: "chassis" };
    this.chassisCollider = this.world.createCollider(
      colliderDesc,
      this.chassisBody
    );

    if (!this.chassisMesh.userData.physics) {
      this.chassisMesh.userData.physics = {};
    }
    this.chassisMesh.userData.physics.body = this.chassisBody;

    this.controller = this.world.createVehicleController(this.chassisBody);
  }

  initWheels() {
    this.wheels = [];

    wheelsPositions.forEach((pos, index) => {
      this.addWheel(index, pos);
    });
    this.controller.setWheelSteering(0, Math.PI / 4);
    this.controller.setWheelSteering(1, Math.PI / 4);
  }

  addWheel(index, pos) {
    const wheelParams = {
      radius: this.options.wheelRadius,
      width: this.options.wheelWidth,
      suspensionRestLength: 0.8,
      position: new THREE.Vector3(pos.x, pos.y, pos.z),
      direction: new RAPIER.Vector3(...Object.values({ x: 0, y: -1, z: 0 })),
      axle: new RAPIER.Vector3(...Object.values({ x: -1, y: 0, z: 0 })),
    };
    // Adicionar roda ao controller
    this.controller.addWheel(
      wheelParams.position,
      wheelParams.direction,
      wheelParams.axle,
      wheelParams.suspensionRestLength,
      wheelParams.radius
    );

    // Configurar parâmetros da roda
    this.controller.setWheelSuspensionStiffness(
      index,
      wheelSuspensionStiffness
    );
    this.controller.setWheelFrictionSlip(index, wheelFrictionSlip);
    this.controller.setWheelSteering(index, pos.z < 0);

    // Criar mesh da roda
    const geometry = new THREE.CylinderGeometry(
      wheelParams.radius,
      wheelParams.radius,
      wheelParams.width,
      16
    );
    geometry.rotateZ(Math.PI * 0.5);

    const wheelMesh = new THREE.Mesh(
      geometry,
      new THREE.MeshPhongMaterial({
        color: wheelColor,
        transparent: wheelTransparency,
        opacity: wheelOpacity,
      })
    );
    wheelMesh.castShadow = true;
    wheelMesh.position.copy(pos);
    this.wheels.push(wheelMesh);
    this.chassisMesh.add(wheelMesh);
  }

  updateController(movement) {
    this.movement = movement;
    if (this.movement.reset) {
      this.chassisBody.setTranslation(this.spawnPos, true);
      this.chassisBody.setRotation(new RAPIER.Quaternion(0, 0, 0, 1), true);
      this.chassisBody.setLinvel(new RAPIER.Vector3(0, 0, 0), true);
      this.chassisBody.setAngvel(new RAPIER.Vector3(0, 0, 0), true);

      this.movement.accelerateForce.value = 0;
      this.movement.brakeForce.value = 0;
      this.movement.reset = false;

      return;
    }

    let accelerateForce = 0;

    if (this.movement.forward < 0) {
      //if (this.movement.accelerateForce.value === 0) this.chassisBody.wakeUp();
      accelerateForce =
        this.movement.accelerateForce.value -
        this.movement.accelerateForce.step;
      if (accelerateForce < this.movement.accelerateForce.min)
        accelerateForce = this.movement.accelerateForce.min;
    } else if (this.movement.forward > 0) {
      //if (this.movement.accelerateForce.value === 0) this.chassisBody.wakeUp();
      accelerateForce =
        this.movement.accelerateForce.value +
        this.movement.accelerateForce.step;

      if (accelerateForce > this.movement.accelerateForce.max)
        accelerateForce = this.movement.accelerateForce.max;
    } else {
      if (this.chassisBody.isSleeping()) this.chassisBody.wakeUp();
    }

    this.movement.accelerateForce.value = accelerateForce;

    //console.log(accelerateForce);

    let brakeForce = 0;

    if (this.movement.brake > 0) {
      brakeForce =
        this.movement.brakeForce.value + this.movement.brakeForce.step;
      if (brakeForce > this.movement.brakeForce.max)
        brakeForce = this.movement.brakeForce.max;
    }

    this.movement.brakeForce.value = brakeForce;

    const engineForce = accelerateForce;

    this.controller.setWheelEngineForce(0, engineForce);
    this.controller.setWheelEngineForce(1, engineForce);

    const currentSteering = this.controller.wheelSteering(0);
    const steerDirection = this.movement.right;
    const steerAngle = Math.PI / 4;

    const steering = THREE.MathUtils.lerp(
      currentSteering,
      steerAngle * steerDirection,
      0.25 // interpolation factor
    );

    this.controller.setWheelSteering(0, steering);
    this.controller.setWheelSteering(1, steering);

    const wheelBrake = this.movement.brake * brakeForce;
    this.controller.setWheelBrake(0, wheelBrake);
    this.controller.setWheelBrake(1, wheelBrake);
    this.controller.setWheelBrake(2, wheelBrake);
    this.controller.setWheelBrake(3, wheelBrake);
  }
  updateWheels() {
    if (this.controller === undefined) return;
    const wheelSteeringQuat = new THREE.Quaternion();
    const wheelRotationQuat = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    this.wheels.forEach((wheel, index) => {
      const wheelAxleCs = this.controller.wheelAxleCs(index);
      const connection =
        this.controller.wheelChassisConnectionPointCs(index).y || 0;
      const suspension = this.controller.wheelSuspensionLength(index) || 0;
      const steering = this.controller.wheelSteering(index) || 0;
      const rotationRad = this.controller.wheelRotation(index) || 0;

      wheel.position.y = connection - suspension;

      wheelSteeringQuat.setFromAxisAngle(up, steering);
      wheelRotationQuat.setFromAxisAngle(wheelAxleCs, rotationRad);

      wheel.quaternion.multiplyQuaternions(
        wheelSteeringQuat,
        wheelRotationQuat
      );
    });
  }
}
