import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { bool } from "three/tsl";

import { IS_DEBUG } from "debugManager";
import { calcVolumePoint } from "three/examples/jsm/curves/NURBSUtils.js";

//TODO :  por variaveis como parametros da classe
const mass = 10;
const restitution = 0.8;
const wheelSuspensionStiffness = 24;
const wheelFrictionSlip = 1000;

//FIXME provisorio
const chassisColor = 0x0000ff;
const chassisTransparency = true;
const chassisOpacity = 0.9;
const wheelColor = 0x404040;
const wheelTransparency = true;
const wheelOpacity = 0.9;

const chassisSize = new THREE.Vector3(3.5, 2.5, 7);
const wheelRadius = 0.5;
const wheelWidth = 0.4;
const wheelsPositions = [
  { x: -1.9, y: -0.5, z: -2.2 },
  { x: 1.9, y: -0.5, z: -2.2 },
  { x: -1.9, y: -0.5, z: 2.2 },
  { x: 1.9, y: -0.5, z: 2.2 },
];

const cannonCilinderLength = 2.5; // comprimento do canhão
const cannonCilinderRadius = 0.2; // raio do canhão
const cannonBaseHeight = 0.8;
const cannonBaseRadius = 1.2;

export class Tank {
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
  //TODO substituir tudo o que usa scene e world por sceneManager e physicsManager
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
      //appendixUp: //TODO
      //appendixRight: //TODO
      //shoot: //TODO
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
    this.initCanon();
    if (IS_DEBUG && this.rapierDebugRender) {
      this.rapierDebugRender.addVehicle(this.chassisBody, this.controller);
    } else if (IS_DEBUG) {
      console.warn("rapierDebugRender não está inicializado.");
    }
  }

  initChassis() {
    // Mesh Three.js
    const chassisMaterial = new THREE.MeshPhongMaterial({
      color: chassisColor,
      transparent: chassisTransparency,
      opacity: chassisOpacity,
    });
    this.chassisMesh = new THREE.Mesh(
      new THREE.BoxGeometry(...this.options.chassisSize.toArray()),
      chassisMaterial
    );

    if (this.options.chassisPosition) {
      this.chassisMesh.position.copy(this.options.chassisPosition);
    } else {
      this.chassisMesh.position.set(0, 3, 0);
    }
    this.chassisMesh.castShadow = true;

    //+: Ponto de rotação do canhao no chassis
    this.turretPivot = new THREE.Object3D();
    this.turretPivot.position.set(0, this.options.chassisPosition.y / 2, 0);
    if (IS_DEBUG) {
      const improvMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.2),
        new THREE.MeshPhongMaterial({
          color: 0xff0000,
          transparent: chassisTransparency,
          opacity: chassisOpacity,
        })
      );
      improvMesh.position.copy(this.turretPivot.position);
      this.chassisMesh.add(improvMesh);
    }
    this.chassisMesh.add(this.turretPivot);

    this.scene.add(this.chassisMesh);

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
    //chassisDesc.setRotation(...this.chassisMesh.position.toArray());
    //chassisDesc.setRotation(1,0,0,0);
    this.chassisBody = this.world.createRigidBody(chassisDesc);
    this.chassisBody.userData = { name: "chassis" };
    this.chassisCollider = this.world.createCollider(
      colliderDesc,
      this.chassisBody
    );
    //TODO :  isto vai para o physicsManager
    //meshes.push(this.chassisMesh);
    //meshMap.set(this.chassisMesh, this.chassisBody);
    // fim de physics.addMesh

    if (!this.chassisMesh.userData.physics) {
      this.chassisMesh.userData.physics = {};
    }
    this.chassisMesh.userData.physics.body = this.chassisBody;

    this.controller = this.world.createVehicleController(this.chassisBody);
  }
  initCanon() {
    const cannonMaterial = new THREE.MeshPhongMaterial({
      color: chassisColor,
      transparent: chassisTransparency,
      opacity: chassisOpacity,
    });
    //+: Provisorio pra canhao
    const cannonCilinderGeometry = new THREE.CylinderGeometry(
      cannonCilinderRadius,
      cannonCilinderRadius,
      cannonCilinderLength,
      16
    );
    const cannonBaseGeometry = new THREE.CylinderGeometry(
      cannonBaseRadius,
      cannonBaseRadius,
      cannonBaseHeight,
      16
    );
    this.cannonGroup = new THREE.Group();
    const cannonCilinderMesh = new THREE.Mesh(
      cannonCilinderGeometry,
      cannonMaterial
    );
    const cannonBaseMesh = new THREE.Mesh(cannonBaseGeometry, cannonMaterial);
    cannonCilinderMesh.rotation.x = Math.PI / 2;
    cannonCilinderMesh.position.set(0, 0, 0.5 - cannonCilinderLength);
    this.cannonGroup.add(cannonCilinderMesh);
    this.cannonGroup.add(cannonBaseMesh);
    //this.cannonCilinderMesh.castShadow = true;
    //this.cannonBaseMesh.castShadow = true;
    this.scene.add(this.cannonGroup);
    //this.cannonGroup.position.copy(globalPos);

    //+:Fisica
    const cannonGlobalPos = this.options.chassisPosition
      ? this.options.chassisPosition
          .clone()
          .add(
            new THREE.Vector3(
              0,
              this.options.chassisPosition.y / 2 + cannonBaseHeight / 2 + 0.2,
              0
            )
          )
      : new THREE.Vector3(0, 4.5, 0);
    //kinematicVelocityBased
    const cannonBodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(
      cannonGlobalPos.x,
      cannonGlobalPos.y,
      cannonGlobalPos.z
    );
    this.cannonBody = this.world.createRigidBody(cannonBodyDesc);
    this.cannonBody.userData = { name: "cannon" };
    [cannonCilinderMesh, cannonBaseMesh].forEach((mesh) => {
      /* const globalPos = new THREE.Vector3();
      const globalQuat = new THREE.Quaternion();
      mesh.getWorldPosition(globalPos);
      mesh.getWorldQuaternion(globalQuat);
      console.log("globalPos", globalPos);
      console.log("globalQuat", globalQuat);
      */
      const localPos = mesh.position;
      const localQuat = mesh.quaternion;
      /* console.log("localPos", localPos);
      console.log("localQuat", localQuat); */

      const box = new THREE.Box3().setFromObject(mesh);
      const size = new THREE.Vector3();
      box.getSize(size);

      const colliderDesc = this.physicsManager.getSimpleColliderDesc(mesh);
      colliderDesc.setTranslation(...localPos);
      colliderDesc.setRotation(localQuat);
      colliderDesc.setMass(0.1);
      this.world.createCollider(colliderDesc, this.cannonBody);
    });

    this.physicsManager.addMesh(cannonBaseMesh, this.cannonBody, "cannonBase");
    //+: Base Joints
    const yAxis = new RAPIER.Vector3(0, 1, 0);
    const worldPivot = this.turretPivot.getWorldPosition(new THREE.Vector3());
    const chassisWorldPos = this.chassisMesh.getWorldPosition(
      new THREE.Vector3()
    );
    /* const cannonWorldPos = this.cannonGroup.getWorldPosition(
      new THREE.Vector3()
    ); */
    const chassisAnchor = new RAPIER.Vector3(
      worldPivot.x - chassisWorldPos.x,
      worldPivot.y - chassisWorldPos.y,
      worldPivot.z - chassisWorldPos.z
    );
    //const chassisAnchor = new RAPIER.Vector3(0,0,1);
    const turretAnchor = new RAPIER.Vector3(
      worldPivot.x - cannonGlobalPos.x,
      worldPivot.y - cannonGlobalPos.y,
      worldPivot.z - cannonGlobalPos.z
    );
    //const turretAnchor = new RAPIER.Vector3(0,0,-3);
    console.log("chassisAnchor", chassisAnchor, "turretAnchor", turretAnchor);
    const jointData = RAPIER.JointData.revolute(
      chassisAnchor,
      turretAnchor,
      yAxis
    );
    this.world.createImpulseJoint(
      jointData,
      this.chassisBody,
      this.cannonBody,
      true // wakeUpBodies
    );
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
      this.chassisBody.setTranslation(new RAPIER.Vector3(0, 1, 0), true);
      this.chassisBody.setRotation(new RAPIER.Quaternion(0, 0, 0, 1), true);
      this.chassisBody.setLinvel(new RAPIER.Vector3(0, 0, 0), true);
      this.chassisBody.setAngvel(new RAPIER.Vector3(0, 0, 0), true);

      this.movement.accelerateForce.value = 0;
      this.movement.brakeForce.value = 0;

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
