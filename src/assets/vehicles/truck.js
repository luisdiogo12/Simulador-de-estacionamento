import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { bool } from "three/tsl";

import { IS_DEBUG } from "debugManager";

//TODO :  por variaveis como parametros da classe
const mass = 10;
const restitution = 0.8;
const wheelSuspensionStiffness = 24;
const wheelFrictionSlip = 1000;
const suspensionRestLength = 0.4;
//FIXME provisorio
const chassisColor = 0x00ffff;
const chassisTransparency = false;
const chassisOpacity = 0.3;
const wheelColor = 0x404040;
const wheelTransparency = false;
const wheelOpacity = 0.3;
const bucketColor = 0xaf00af;
const bucketTransparency = false;
const bucketOpacity = 0.3;

const chassisSize = new THREE.Vector3(2.5, 3, 15);
const chassisSize1 = new THREE.Vector3(2.5, 1, 15);
const chassisSize2 = new THREE.Vector3(2.5, 2.5, 3);
const wheelRadius = 0.9;
const wheelWidth = 0.7;
const wheelsPositions = [
  { x: -1.2, y: -1, z: -6.3 },
  { x: 1.2, y: -1, z: -6.3 },
  { x: -1.2, y: -1, z: 6 - wheelRadius*2 -0.5 },
  { x: 1.2, y: -1, z: 6 - wheelRadius*2 -0.5},
  { x: -1.2, y: -1, z: 6 },
  { x: 1.2, y: -1, z: 6 },
];

const bucketThickness = 0.2;
const bucketHeight = 2.5;
const bucketWidth = 2.5;
const bucketLength = 12;
const bucketMargin = 1.25;
export class Truck {
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
      appendixUp: 0, //TODO
      appendixRight: 0, //TODO para abrir o bucket
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
    this.initBucket();
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
    /* this.chassisMesh = new THREE.Mesh(
      new THREE.BoxGeometry(...this.options.chassisSize.toArray()),
      chassisMaterial
    );

    if (this.options.chassisPosition) {
      this.chassisMesh.position.copy(this.options.chassisPosition);
    } else {
      this.chassisMesh.position.set(0, 3, 0);
    }
    this.chassisMesh.castShadow = true;
    this.sceneManager.addToScene(this.chassisMesh);

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
 */
    //+:-------------
    const chassis1Geo = new THREE.BoxGeometry(...chassisSize1.toArray());
    this.chassisMesh = new THREE.Group();
    const chassis1Mesh = new THREE.Mesh(chassis1Geo, chassisMaterial);
    const chassis2Geo = new THREE.BoxGeometry(...chassisSize2.toArray());
    const chassis2Mesh = new THREE.Mesh(chassis2Geo, chassisMaterial);
    chassis2Mesh.position.set(
      0,
      (chassisSize1.y + chassisSize2.y) / 2,
      -(chassisSize1.z - chassisSize2.z) / 2
    );
    this.chassisMesh.add(chassis1Mesh);
    this.chassisMesh.add(chassis2Mesh);
    const pivot = new THREE.Object3D();
    pivot.name = "pivot";
    pivot.position.set(0, chassisSize1.y / 2, chassisSize1.z / 2);
    if (IS_DEBUG) {
      const improvMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.1),
        new THREE.MeshPhongMaterial({
          color: 0xff0000,
          transparent: chassisTransparency,
          opacity: chassisOpacity,
        })
      );
      improvMesh.position.copy(pivot.position);
      this.chassisMesh.add(improvMesh);
    }
    this.chassisMesh.add(pivot); //+:const pivot = this.chassisMesh.getObjectByName("pivot");
    //this.chassisMesh.position.copy(this.chassisMesh.position);
    //this.chassisMesh.position.set(0, 5, 0);
    if (this.options.chassisPosition) {
          this.chassisMesh.position.copy(this.options.chassisPosition);
          this.spawnPos = this.options.chassisPosition.clone();
        } else {
          this.chassisMesh.position.set(0, 3, 0);
          this.spawnPos = new THREE.Vector3(0, 3, 0);
        }
    this.sceneManager.addToScene(this.chassisMesh);
    this.follow_target = this.chassisMesh;

    const chassisBody1Desc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(...this.chassisMesh.position)
      .setRotation(this.chassisMesh.quaternion);
    this.chassisBody = this.world.createRigidBody(chassisBody1Desc);
    this.chassisBody.userData = { name: "chassisBody" };
    let colliderDesc1;
    colliderDesc1 = this.physicsManager
      .getSimpleColliderDesc(chassis1Mesh)
      .setTranslation(...chassis1Mesh.position)
      .setRotation(chassis1Mesh.quaternion);
    this.world.createCollider(colliderDesc1, this.chassisBody);
    colliderDesc1 = this.physicsManager
      .getSimpleColliderDesc(chassis2Mesh)
      .setTranslation(...chassis2Mesh.position)
      .setRotation(chassis2Mesh.quaternion);
    this.world.createCollider(colliderDesc1, this.chassisBody);
    //TODO :  isto vai para o physicsManager
    //meshes.push(this.chassisMesh);
    //meshMap.set(this.chassisMesh, this.chassisBody);
    // fim de physics.addMesh
    this.physicsManager.addGroup(
      this.chassisMesh,
      this.chassisBody,
      "chassisBody"
    );

    if (!this.chassisMesh.userData.physics) {
      this.chassisMesh.userData.physics = {};
    }
    this.chassisMesh.userData.physics.body = this.chassisBody;

    this.controller = this.world.createVehicleController(this.chassisBody);
  }

  initBucket() {
    const bucketMaterial = new THREE.MeshPhongMaterial({
      color: bucketColor,
      transparent: bucketTransparency,
      opacity: bucketOpacity,
    });
    this.bucketGroup = new THREE.Group();
    const bucket1Geo = new THREE.BoxGeometry(
      bucketWidth,
      bucketHeight,
      bucketThickness
    );
    const bucket1Mesh = new THREE.Mesh(bucket1Geo, bucketMaterial);
    const bucket2Geo = new THREE.BoxGeometry(
      bucketWidth,
      bucketThickness,
      bucketLength - bucketThickness - bucketMargin
    );
    const bucket2Mesh = new THREE.Mesh(bucket2Geo, bucketMaterial);
    const bucket3Geo = new THREE.BoxGeometry(
      bucketThickness,
      bucketHeight - bucketThickness,
      bucketLength - bucketThickness - bucketMargin
    );
    const bucket3Mesh = new THREE.Mesh(bucket3Geo, bucketMaterial);
    const bucket4Geo = new THREE.BoxGeometry(
      bucketThickness,
      bucketHeight - bucketThickness,
      bucketLength - bucketThickness - bucketMargin
    );
    const bucket4Mesh = new THREE.Mesh(bucket4Geo, bucketMaterial);

    /**
const bucketThickness = 0.2;
const bucketHeight = 2.5;
const bucketWidth = 2.5;
const bucketLength = 6.5;
     */
    this.bucketGroup.add(bucket1Mesh);
    this.bucketGroup.add(bucket2Mesh);
    this.bucketGroup.add(bucket3Mesh);
    this.bucketGroup.add(bucket4Mesh);
    bucket1Mesh.position.set(0, 0, 0);
    bucket2Mesh.position.set(
      0,
      -(bucketHeight - bucketThickness) / 2,
      (bucketLength - bucketMargin) / 2
    );
    bucket3Mesh.position.set(
      (bucketWidth - bucketThickness) / 2,
      bucketThickness / 2,
      (bucketLength - bucketMargin) / 2
    );
    bucket4Mesh.position.set(
      -(bucketWidth - bucketThickness) / 2,
      bucketThickness / 2,
      (bucketLength - bucketMargin) / 2
    );

    this.bucketGroup.position.copy(this.chassisMesh.position);
    this.bucketGroup.translateX(0);
    this.bucketGroup.translateY((bucketHeight + chassisSize1.y) / 2);
    this.bucketGroup.translateZ(
      -(bucketLength - bucketThickness - chassisSize2.z) / 2 + bucketMargin
    );
    this.sceneManager.addToScene(this.bucketGroup);
    //+:FISICA COLLIDERS
    const bucketBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(...this.bucketGroup.position)
      .setRotation(this.bucketGroup.quaternion);
    this.bucketBody = this.world.createRigidBody(bucketBodyDesc);
    this.bucketBody.userData = { name: "bucketBody" };
    let colliderDesc;
    colliderDesc = this.physicsManager
      .getSimpleColliderDesc(bucket1Mesh)
      .setTranslation(...bucket1Mesh.position)
      .setRotation(bucket1Mesh.quaternion)
      .setMass(0.1);
    this.world.createCollider(colliderDesc, this.bucketBody);
    colliderDesc = this.physicsManager
      .getSimpleColliderDesc(bucket2Mesh)
      .setTranslation(...bucket2Mesh.position)
      .setRotation(bucket2Mesh.quaternion)
      .setMass(0.1);
    this.world.createCollider(colliderDesc, this.bucketBody);
    colliderDesc = this.physicsManager
      .getSimpleColliderDesc(bucket3Mesh)
      .setTranslation(...bucket3Mesh.position)
      .setRotation(bucket3Mesh.quaternion).setMass(0.1);
    this.world.createCollider(colliderDesc, this.bucketBody);
    colliderDesc = this.physicsManager
      .getSimpleColliderDesc(bucket4Mesh)
      .setTranslation(...bucket4Mesh.position)
      .setRotation(bucket4Mesh.quaternion).setMass(0.1);
    this.world.createCollider(colliderDesc, this.bucketBody);
    //+: FISICA JOINTS
    const pivot = this.chassisMesh.getObjectByName("pivot");
    const GP_pivot = pivot.getWorldPosition(new THREE.Vector3());
    const GP_bucketGroup = this.bucketGroup.getWorldPosition(
      new THREE.Vector3()
    );
    const anchor1 = [
      GP_pivot.x - GP_bucketGroup.x,
      GP_pivot.y - GP_bucketGroup.y,
      GP_pivot.z - GP_bucketGroup.z,
    ];
    const anchor2 = [pivot.position.x, pivot.position.y, pivot.position.z];
    this.bucketJoint = this.physicsManager.addJoint(
      this.bucketBody,
      this.chassisBody,
      {
        type: "revolute",
        anchor1: anchor1,
        anchor2: anchor2,
        axis: [1, 0, 0], // yAxis
      }
    );
    this.bucketJoint.limitsEnabled();
    this.bucketJoint.setLimits(-Math.PI / 3, 0); 
    this.physicsManager.addGroup(
      this.bucketGroup,
      this.bucketBody,
      "bucketBody"
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
      suspensionRestLength: suspensionRestLength,
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
    //this.chassisMesh.add(wheelMesh);
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

    this.updateBucket();
  }
  updateBucket() {
    const maxAngularSpeed = Math.PI / 8;
    const damping = 500000.0; 
    const dir = this.movement.appendixUp || 0;
    //console.log("dir", dir);
    const targetVel = -dir * maxAngularSpeed; //velocidade alvo
    this.bucketJoint.configureMotorVelocity(targetVel, damping);
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
