import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { bool } from "three/tsl";

import { IS_DEBUG } from "debugManager";

//TODO :  por variaveis como parametros da classe
const mass = 100;
const restitution = 0.8;
const wheelSuspensionStiffness = 24;
const wheelFrictionSlip = 1000;

//FIXME provisorio
const chassisColor = 0x00ff00;
const chassisTransparency = false;
const chassisOpacity = 0.3;
const wheelColor = 0x404040;
const wheelTransparency = false;
const wheelOpacity = 0.3;
const bladeColor = 0x808080; // cor da lâmina do bulldozer
const bladeTransparency = false;
const bladeOpacity = 0.3;

const chassisSize = new THREE.Vector3(2.5, 2, 4);
const wheelRadius = 0.5;
const wheelWidth = 0.4;
const wheelsPositions = [
  { x: -1.2, y: -0.5, z: -1.5 },
  { x: 1.2, y: -0.5, z: -1.5 },
  { x: -1.2, y: -0.5, z: 0 },
  { x: 1.2, y: -0.5, z: 0 },
  { x: -1.2, y: -0.5, z: 1.5 },
  { x: 1.2, y: -0.5, z: 1.5 },
];
const bladeWidth = 4;
const bladeHeight = 2; //aresta de 2.8284
const bladeDepth = 1;
const bladeThickness = 0.2; // espessura da lâmina
const bladeCylinderRadius = 0.2; // raio do cilindro que conecta a lâmina ao chassis
const bladeCylinderHeight = 0.5; // altura do cilindro que conecta a lâmina ao chassis

export class Bulldozer {
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
      appendixRight: 0, //TODO talvez
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
    this.initChovel();
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
      this.spawnPos = this.options.chassisPosition.clone();
    } else {
      this.chassisMesh.position.set(0, 3, 0);
      this.spawnPos = new THREE.Vector3(0, 3, 0);
    }
    this.chassisMesh.castShadow = true;
    //this.blade.position.set(0,0,0);
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
    //chassisDesc.setRotation(...this.chassisMesh.position.toArray());
    //chassisDesc.setRotation(1,0,0,0);
    this.chassisBody = this.world.createRigidBody(chassisDesc);
    this.chassisBody.userData = { name: "chassis" };
    this.chassisCollider = this.world.createCollider(
      colliderDesc,
      this.chassisBody
    );

    //+:Pivot de referencia
    const pivot = new THREE.Object3D();
    pivot.name = "pivot";
    pivot.position.set(0, 0, -(this.options.chassisSize.z / 2));
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
  initChovel() {
    const bladeGroup = new THREE.Group();
    const bladeMat = new THREE.MeshPhongMaterial({
      color: bladeColor,
      transparent: bladeTransparency,
      opacity: bladeOpacity,
    });
    const blade1Geo = new THREE.BoxGeometry(
      bladeWidth,
      bladeHeight,
      bladeThickness
    );
    const blade1 = new THREE.Mesh(blade1Geo, bladeMat);
    const blade2Geo = new THREE.BoxGeometry(
      bladeWidth,
      bladeThickness,
      bladeDepth
    );
    const blade2 = new THREE.Mesh(blade2Geo, bladeMat);
    const bladeCylinderGeo = new THREE.CylinderGeometry(
      bladeCylinderRadius,
      bladeCylinderRadius,
      bladeDepth,
      16
    );
    const rotMatrix = new THREE.Matrix4().makeRotationX(Math.PI / 2);
    console.log("rotMatrix", rotMatrix);
    bladeCylinderGeo.applyMatrix4(rotMatrix);
    const bladeCylinder = new THREE.Mesh(bladeCylinderGeo, bladeMat);
    const bladeJointGeo = new THREE.SphereGeometry(bladeCylinderRadius, 16, 16);
    const bladeJointMesh = new THREE.Mesh(bladeJointGeo, bladeMat);
    blade1.position.set(0, 0, 0);
    blade2.position.set(
      0,
      -(bladeHeight + bladeThickness) / 2,
      -(bladeDepth - bladeThickness) / 2
    );
    bladeCylinder.position.set(0, 0, bladeCylinderHeight + bladeThickness / 2);
    const quat = new THREE.Quaternion().setFromRotationMatrix(rotMatrix);

    bladeCylinder.userData.geo = {
      quaternion: quat.clone(),
    };
    bladeJointMesh.position.set(
      0,
      0,
      bladeCylinderHeight * 2 + bladeThickness + bladeCylinderRadius / 2
    );
    bladeGroup.add(blade1);
    bladeGroup.add(blade2);
    bladeGroup.add(bladeCylinder);
    bladeGroup.position.copy(this.options.chassisPosition);
    bladeGroup.translateX(0);
    bladeGroup.translateY(
      -(this.options.chassisSize.y - bladeThickness - bladeCylinderRadius) / 2
    );
    bladeGroup.translateZ(
      -((this.options.chassisSize.z + bladeHeight + bladeThickness) / 2 + 0.4)
    );
    bladeJointMesh.translateX(this.options.chassisPosition.x);
    bladeJointMesh.translateY(
      this.options.chassisPosition.y -
        (this.options.chassisSize.y - bladeThickness - bladeCylinderRadius) / 2
    );
    bladeJointMesh.translateZ(
      this.options.chassisPosition.z -
        ((this.options.chassisSize.z + bladeHeight + bladeThickness) / 2 + 0.4)
    );
    bladeGroup.updateMatrixWorld();
    bladeJointMesh.updateMatrixWorld();
    console.log(
      "\nblade1_WorldPos",
      blade1.getWorldPosition(new THREE.Vector3()),
      "\nblade1.position",
      blade1.position,
      "\nblade2_WorldPos",
      blade2.getWorldPosition(new THREE.Vector3()),
      "\nbladeCylinder_WorldPos",
      bladeCylinder.getWorldPosition(new THREE.Vector3()),
      "\nbladeJoint_WorldPos",
      bladeJointMesh.getWorldPosition(new THREE.Vector3()),
      "\nbladeGroup_WorldPos",
      bladeGroup.getWorldPosition(new THREE.Vector3()),
      "\nbladeGroup.position",
      bladeGroup.position
    );
    this.sceneManager.addToScene(bladeGroup);
    this.sceneManager.addToScene(bladeJointMesh);
    //+: FISICA COLLIDERS
    const bladeBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(...bladeGroup.position)
      .setRotation(bladeGroup.quaternion);
    this.bladeBody = this.world.createRigidBody(bladeBodyDesc);
    console.log("this.bladeBody.position", this.bladeBody.translation());
    this.bladeBody.userData = { name: "bladeBody" };
    let colliderDesc;
    colliderDesc = this.physicsManager
      .getSimpleColliderDesc(blade1)
      .setTranslation(...blade1.position)
      .setRotation(blade1.quaternion)
      .setMass(0.1);
    console.log("blade1-colliderDesc.translation()", blade1.position);
    this.world.createCollider(colliderDesc, this.bladeBody);
    colliderDesc = this.physicsManager
      .getSimpleColliderDesc(blade2)
      .setTranslation(...blade2.position)
      .setRotation(blade2.quaternion)
      .setMass(0.1);
    console.log("blade2-colliderDesc.translation()", blade2.position);
    this.world.createCollider(colliderDesc, this.bladeBody);
    colliderDesc = this.physicsManager
      .getSimpleColliderDesc(bladeCylinder)
      .setTranslation(...bladeCylinder.position)
      .setRotation(bladeCylinder.userData.geo.quaternion)
      .setMass(0.1);
    console.log(
      "bladeCylinder-colliderDesc.translation()",
      bladeCylinder.position
    );
    this.world.createCollider(colliderDesc, this.bladeBody);

    const bladeJointBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(...bladeJointMesh.position)
      .setRotation(bladeJointMesh.quaternion);
    this.bladeJointBody = this.world.createRigidBody(bladeJointBodyDesc);
    this.bladeJointBody.userData = { name: "bladeJointBody" };
    colliderDesc = this.physicsManager
      .getSimpleColliderDesc(bladeJointMesh)
      .setMass(0.1);
    console.log(
      "bladeJointMesh-colliderDesc.translation()",
      bladeJointMesh.position
    );
    this.world.createCollider(colliderDesc, this.bladeJointBody);
    //+: FISICA JOINTS

    const GP_bladeJoint = bladeJointMesh.getWorldPosition(new THREE.Vector3());
    const GP_bladeGroup = bladeGroup.getWorldPosition(new THREE.Vector3());
    let anchor1 = [0, 0, 0]; //joint mesmo no meio de bladeJointBody
    let anchor2 = [
      GP_bladeJoint.x - GP_bladeGroup.x,
      GP_bladeJoint.y - GP_bladeGroup.y,
      GP_bladeJoint.z - GP_bladeGroup.z,
    ];
    console.log("anchor", anchor2);

    this.bladeJoint = this.physicsManager.addJoint(
      this.bladeJointBody,
      this.bladeBody,
      {
        type: "fixed",
        anchor1: anchor1,
        frame1: [0, 0, 0, 1],
        anchor2: anchor2,
        frame2: [0, 0, 0, 1],
      }
    );

    const GP_chassis = this.chassisMesh.getWorldPosition(new THREE.Vector3());
    anchor1 = [
      GP_bladeJoint.x - GP_chassis.x,
      GP_bladeJoint.y - GP_chassis.y + 0.7,
      GP_bladeJoint.z - GP_chassis.z,
    ];
    anchor2 = [0, 0, 0];
    this.chovelJoint = this.physicsManager.addJoint(
      this.chassisBody,
      this.bladeJointBody,
      {
        type: "revolute",
        anchor1: anchor1,
        anchor2: anchor2,
        axis: [1, 0, 0], //
      }
    );
    this.chovelJoint.limitsEnabled();
    this.chovelJoint.setLimits(-Math.PI / 8, Math.PI / 3);
    this.physicsManager.addMesh(
      bladeJointMesh,
      this.bladeJointBody,
      "bladeJoint"
    );
    this.physicsManager.addGroup(bladeGroup, this.bladeBody, "blade");
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

    this.updateChovel();
  }
  updateChovel() {
    const maxAngularSpeed = Math.PI / 4;
    const damping = 500000.0; // torque? contra forcas externas

    const dir = this.movement.appendixUp || 0;
    //console.log("dir", dir);
    const targetVel = dir * maxAngularSpeed; //velocidade alvo
    this.chovelJoint.configureMotorVelocity(targetVel, damping);
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
