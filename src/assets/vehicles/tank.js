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
const chassisTransparency = false;
const chassisOpacity = 0.9;
const wheelColor = 0x404040;
const wheelTransparency = false;
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

const cannonCylinderLength = 2.5; // comprimento do canhão
const cannonCylinderRadius = 0.2; // raio do canhão
const cannonBaseHeight = 0.8;
const cannonBaseRadius = 1.2;

const projRadius = 0.1;
const projLenght = 0.5;
const projMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
const projGeometry = new THREE.CylinderGeometry(
  projRadius,
  projRadius,
  projLenght,
  16
);
const projLaunchSpeed = 50; //unidades/segundo
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
  spawnPos;
  //TODO substituir tudo o que usa scene e world por sceneManager e physicsManager
  constructor(
    scene,
    sceneManager,
    world,
    physicsManager,
    options = {},
    rapierDebugRender,
    follow_target = null //+: para seguir o veiculo
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
      appendixRight: 0,
      appendixUp: 0, //TODO
      shoot: 0,
    };
    this._hasShotThisPress = false; //+: usar so caso queria canhao semiautomatico
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
      this.spawnPos = this.options.chassisPosition.clone();
    } else {
      this.chassisMesh.position.set(0, 3, 0);
      this.spawnPos = new THREE.Vector3(0, 3, 0);
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
    this.cannonGroup = new THREE.Group();
    const cannonMaterial = new THREE.MeshPhongMaterial({
      color: chassisColor,
      transparent: chassisTransparency,
      opacity: chassisOpacity,
    });

    //+: Provisorio pra canhao
    const cannonCylinderGeometry = new THREE.CylinderGeometry(
      cannonCylinderRadius,
      cannonCylinderRadius,
      cannonCylinderLength,
      16
    );
    const cannonBaseGeometry = new THREE.CylinderGeometry(
      cannonBaseRadius,
      cannonBaseRadius,
      cannonBaseHeight,
      16
    );
    this.cannonBaseMesh = new THREE.Mesh(cannonBaseGeometry, cannonMaterial);
    this.cannonBasePivot = new THREE.Object3D();
    this.cannonBasePivot.position.set(0, 0, -cannonBaseRadius);
    if (IS_DEBUG) {
      const improvMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.1),
        new THREE.MeshPhongMaterial({
          color: 0x00ff00,
          transparent: chassisTransparency,
          opacity: chassisOpacity,
        })
      );
      improvMesh.position.copy(this.cannonBasePivot.position);
      this.cannonBaseMesh.add(improvMesh);
    }
    this.cannonBaseMesh.add(this.cannonBasePivot);

    const cannonCylinderMesh = new THREE.Mesh(
      cannonCylinderGeometry,
      cannonMaterial
    );
    this.cylinderPivot = new THREE.Object3D();
    this.cylinderPivot.position.set(0, cannonCylinderLength / 2, 0);
    if (IS_DEBUG) {
      const improvMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.1),
        new THREE.MeshPhongMaterial({
          color: 0xff0000,
          transparent: chassisTransparency,
          opacity: chassisOpacity,
        })
      );
      improvMesh.position.copy(this.cylinderPivot.position);
      cannonCylinderMesh.add(improvMesh);
    }
    cannonCylinderMesh.add(this.cylinderPivot); //+:const pivot = cannonCylinderMesh.getObjectByName("cylinderPivot");

    this.shootPivot = new THREE.Object3D();
    this.shootPivot.position.set(0, -cannonCylinderLength / 2, 0);
    if (IS_DEBUG) {
      const improvMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.1),
        new THREE.MeshPhongMaterial({
          color: 0xff00ff,
          transparent: chassisTransparency,
          opacity: chassisOpacity,
        })
      );
      improvMesh.position.copy(this.shootPivot.position);
      cannonCylinderMesh.add(improvMesh);
    }
    cannonCylinderMesh.add(this.shootPivot);

    /* this.cannonGroup.add(cannonCylinderMesh);
    this.cannonGroup.add(this.cannonBaseMesh);
    this.cannonGroup.position.set(5, 3.9, 10);
    //this.cannonGroup.position.copy(globalPos);
    this.scene.add(this.cannonGroup); */

    [cannonCylinderMesh, this.cannonBaseMesh].forEach((mesh) => {
      //mesh.castShadow = true;
      //mesh.this.cannonBaseMesh.castShadow = true;
      mesh.translateX(5);
      mesh.translateY(3.9);
      mesh.translateZ(10);
      this.scene.add(mesh); //ja faz updateMatrixWorld
    });
    cannonCylinderMesh.rotation.x = Math.PI / 2;
    cannonCylinderMesh.translateY(-cannonCylinderLength);
    cannonCylinderMesh.updateMatrixWorld();

    //+:Fisica
    const cannonWorldlPos = this.options.chassisPosition
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
    /* const cannonBodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(
      cannonWorldlPos.x,
      cannonWorldlPos.y,
      cannonWorldlPos.z
    ); */

    const baseCWorldPos = this.cannonBaseMesh.getWorldPosition(new THREE.Vector3());
    const baseCWorldQuat = this.cannonBaseMesh.getWorldQuaternion(
      new THREE.Quaternion()
    );
    console.log(
      "baseCWorldPos",
      baseCWorldPos,
      "\nbaseCWorldQuat",
      baseCWorldQuat,
      "\ncannonBaseMesh.position",
      this.cannonBaseMesh.position,
      "\ncannonBaseMesh.quaternion",
      this.cannonBaseMesh.quaternion
    );
    const baseBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(
        ...this.cannonBaseMesh.position /* baseCWorldPos.x, baseCWorldPos.y, baseCWorldPos.z */
      )
      .setRotation(
        this.cannonBaseMesh.quaternion
        /* baseCWorldQuat.x,
        baseCWorldQuat.y,
        baseCWorldQuat.z,
        baseCWorldQuat.w */
      );
    let colliderDesc =
      this.physicsManager.getSimpleColliderDesc(this.cannonBaseMesh);
    this.cannonBaseBody = this.world.createRigidBody(baseBodyDesc);
    this.cannonBaseBody.userData = { name: "cannonBase" };
    /* this.cannonBaseBody = this.world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 0, 0)
    );
    this.cannonBaseBody.userData = { name: "cannonBase" };
    const cannonBaseMeshLocalPos = this.cannonBaseMesh.position;
    const cannonBaseMeshLocalQuat = this.cannonBaseMesh.quaternion;
    //console.log("cannonCylinderLocalPos", cannonCylinderLocalPos);
    //console.log("cannonCylinderLocalQuat", cannonCylinderLocalQuat); 
    colliderDesc.setTranslation(...cannonBaseMeshLocalPos);
    colliderDesc.setRotation(cannonBaseMeshLocalQuat);
    colliderDesc.setMass(0.1); */
    this.world.createCollider(colliderDesc, this.cannonBaseBody);

    //+:
    const cylWorldPos = cannonCylinderMesh.getWorldPosition(
      new THREE.Vector3()
    );
    const cylWorldQuat = cannonCylinderMesh.getWorldQuaternion(
      new THREE.Quaternion()
    );
    console.log(
      "cylWorldPos",
      cylWorldPos,
      "\ncylWorldQuat",
      cylWorldQuat,
      "\ncannonCylinderMesh.position",
      cannonCylinderMesh.position,
      "\ncannonCylinderMesh.quaternion",
      cannonCylinderMesh.quaternion
    );
    const cylinderBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(
        ...cannonCylinderMesh.position /* cylWorldPos.x, cylWorldPos.y, cylWorldPos.z */
      )
      .setRotation(
        /* cylWorldQuat.x,
        cylWorldQuat.y,
        cylWorldQuat.z,
        cylWorldQuat.w */
        cannonCylinderMesh.quaternion
      );
    colliderDesc =
      this.physicsManager.getSimpleColliderDesc(cannonCylinderMesh);
    this.cannonCylinderBody = this.world.createRigidBody(cylinderBodyDesc);
    this.cannonCylinderBody.userData = { name: "cannonBase" };

    /* this.cannonCylinderBody = this.world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 0, 0)
    );
    this.cannonCylinderBody.userData = { name: "cannonCylinder" };
    const cannonCylinderLocalPos = cannonCylinderMesh.position;
    const cannonCylinderLocalQuat = cannonCylinderMesh.quaternion;
    //console.log("cannonCylinderLocalPos", cannonCylinderLocalPos);
    //console.log("cannonCylinderLocalQuat", cannonCylinderLocalQuat);
    colliderDesc =
      this.physicsManager.getSimpleColliderDesc(cannonCylinderMesh);
    colliderDesc.setTranslation(...cannonCylinderLocalPos);
    colliderDesc.setRotation(cannonCylinderLocalQuat);
    colliderDesc.setMass(0.1); */
    this.world.createCollider(colliderDesc, this.cannonCylinderBody);
    console.log(
      "cannonBaseBody.translation()",
      this.cannonBaseBody.translation(),
      "\ncannonBaseBody.rotation()",
      this.cannonBaseBody.rotation(),
      "\ncannonCylinderBody.translation()",
      this.cannonCylinderBody.translation(),
      "\ncannonCylinderBody.rotation()",
      this.cannonCylinderBody.rotation()
    );

    //+: Base Joints
    const turretPivotWorldPos = this.turretPivot.getWorldPosition(
      new THREE.Vector3()
    );
    const chassisWorldPos = this.chassisMesh.getWorldPosition(
      new THREE.Vector3()
    );
    const chassisWorld = this.chassisBody.translation();
    const baseWorld = this.cannonBaseBody.translation();
    console.log(
      "turretPivotWorldPos",
      turretPivotWorldPos,
      "\nchassisWorldPos",
      chassisWorldPos,
      "\nchassisWorld",
      chassisWorld,
      "\nbaseWorld",
      baseWorld
    );
    this.cannonBodyJoint = this.physicsManager.addJoint(
      this.chassisBody,
      this.cannonBaseBody,
      {
        type: "revolute",
        anchor1: [
          turretPivotWorldPos.x - chassisWorld.x, //chassisWorldPos.x,
          turretPivotWorldPos.y - chassisWorld.y, //chassisWorldPos.y,
          turretPivotWorldPos.z - chassisWorld.z, //chassisWorldPos.z,
        ], // pivot in chassisAnchor
        anchor2: [
          turretPivotWorldPos.x - baseWorld.x, //cannonWorldlPos.x,
          turretPivotWorldPos.y - baseWorld.y, //cannonWorldlPos.y,
          turretPivotWorldPos.z - baseWorld.z, //cannonWorldlPos.z,
        ], // pivot in turretAnchor
        axis: [0, 1, 0], // yAxis
      }
    );
    console.log(
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
      "\nthis.cylinderPivot.getWorldPosition:",
      this.cylinderPivot.getWorldPosition(new THREE.Vector3()),
      "\ncylinderPivot.position:",
      this.cylinderPivot.position,
      "\nthis.cylinderPivot.getWorldQuaternion:",
      this.cylinderPivot.getWorldQuaternion(new THREE.Quaternion()),
      "\nthis.cylinderPivot.quaternion:",
      this.cylinderPivot.quaternion,
      "\ncannonCylinderMesh.getWorldPosition:",
      cannonCylinderMesh.getWorldPosition(new THREE.Vector3()),
      "\ncannonCylinderMesh.position:",
      cannonCylinderMesh.position,
      "\ncannonCylinderMesh.getWorldQuaternion:",
      cannonCylinderMesh.getWorldQuaternion(new THREE.Quaternion()),
      "\ncannonCylinderMesh.quaternion:",
      cannonCylinderMesh.quaternion,
      "\ncannonBaseMesh.getWorldPosition:",
      this.cannonBaseMesh.getWorldPosition(new THREE.Vector3()),
      "\ncannonBaseMesh.position:",
      this.cannonBaseMesh.position,
      "\ncannonBaseMesh.getWorldQuaternion:",
      this.cannonBaseMesh.getWorldQuaternion(new THREE.Quaternion()),
      "this.cannonBaseMesh.quaternion:",
      this.cannonBaseMesh.quaternion,
      "\nthis.cannonBaseBody.translation():",
      this.cannonBaseBody.translation(),
      "\nthis.cannonCylinderBody.translation():",
      this.cannonCylinderBody.translation(),
      "\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    );
    const P_base_worldPos = this.cannonBasePivot.getWorldPosition(
      new THREE.Vector3()
    );
    const P_cylinder_worldPos = this.cylinderPivot.getWorldPosition(
      new THREE.Vector3()
    );
    const B_base_worldPos = this.cannonBaseBody.translation(); // Vector3 Rapier
    const B_cylinder_worldPos = this.cannonCylinderBody.translation();
    let anchor1 = new THREE.Vector3().subVectors(
      P_cylinder_worldPos,
      B_base_worldPos
    );
    let anchor2 = new THREE.Vector3().subVectors(
      P_cylinder_worldPos,
      B_cylinder_worldPos
    );
    anchor1 = new THREE.Vector3(0, 0, -2.5);
    anchor2 = new THREE.Vector3(0, 0, 0);
    const q_pivot_world = this.cylinderPivot.getWorldQuaternion(
      new THREE.Quaternion()
    );
    const q_base_world = this.cannonBaseBody.rotation(); // RAPIER.Vector as THREE.Quaternion
    const q_cyl_world = this.cannonCylinderBody.rotation(); // idem

    console.log(
      "q_pivot_world",
      q_pivot_world,
      "\nq_base_world",
      q_base_world,
      "\nq_cyl_world",
      q_cyl_world
    );

    // frame1 no corpo base
    const frame1 = new THREE.Quaternion();
    frame1.copy(q_base_world).invert().multiply(q_pivot_world);

    // frame2 no corpo cilindro
    const frame2 = new THREE.Quaternion();
    frame2.copy(q_cyl_world).invert().multiply(q_pivot_world);
    console.log("frame1:", frame1);
    console.log("frame2:", frame2);
    /*  const anchor1 = this.cannonBasePivot.position;
    anchor1.applyQuaternion(
      new THREE.Quaternion(
        this.cannonBaseMesh.quaternion.x,
        this.cannonBaseMesh.quaternion.y,
        this.cannonBaseMesh.quaternion.z,
        this.cannonBaseMesh.quaternion.w
      ).invert()
    );

    const anchor2 = this.cylinderPivot.position;
    anchor2.applyQuaternion(
      new THREE.Quaternion(
        cannonCylinderMesh.quaternion.x,
        cannonCylinderMesh.quaternion.y,
        cannonCylinderMesh.quaternion.z,
        cannonCylinderMesh.quaternion.w
      ).invert()
    ); */
    this.cannonCylinderJoint = this.physicsManager.addJoint(
      this.cannonBaseBody,
      this.cannonCylinderBody,
      {
        type: "fixed",
        /*  anchor1: [
          cylinderPivotWorldPos.x - baseWorld.x,
          cylinderPivotWorldPos.y - baseWorld.y,
          cylinderPivotWorldPos.z - baseWorld.z,
        ], */
        anchor1: [anchor1.x, anchor1.y, anchor1.z],
        frame1: [frame1.x, frame1.y, frame1.z, frame1.w],
        /* anchor2: [
          cylinderPivotWorldPos.x - cylWorld.x,
          cylinderPivotWorldPos.y - cylWorld.y,
          cylinderPivotWorldPos.z - cylWorld.z,
        ], */
        anchor2: [anchor2.x, anchor2.y, anchor2.z],
        frame2: [frame2.x, frame2.y, frame2.z, frame2.w],
      }
    );
    this.physicsManager.addMesh(
      this.cannonBaseMesh,
      this.cannonBaseBody,
      "cannonBase"
    );
    this.physicsManager.addMesh(
      cannonCylinderMesh,
      this.cannonCylinderBody,
      "cannonCylinder"
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
      //TODO atualizar isto com a posicao inicial do veiculo
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

    this.updateTurretMotor();

    if (this.movement.shoot === 1 && !this._hasShotThisPress) {
      this.shootProjectile();
      this.follow_target = this.cannonBaseMesh;
      this._hasShotThisPress = true;
    } else if (this.movement.shoot === 0) {
      this._hasShotThisPress = false;
    }
    if(this.movement.forward !== 0 || this.movement.right !== 0|| this.movement.brake !== 0){
      this.follow_target = this.chassisMesh;
    }
  }
  updateTurretMotor() {
    //Velocity‐controlled motor
    //Position‐controlled motor
    if (!this.cannonBodyJoint) {
      console.warn("cannonBodyJoint não está definido.");
      return;
    }
    const maxAngularSpeed = Math.PI / 4;
    const damping = 10.0; // torque? contra forcas externas

    const dir = this.movement.appendixRight || 0;
    //console.log("dir",dir);
    const targetVel = -dir * maxAngularSpeed; //velocidade alvo
    this.cannonBodyJoint.configureMotorVelocity(targetVel, damping);

    //+: para a camara rodar tb
    if (dir != 0){
      this.follow_target = this.cannonBaseMesh;
    }
  }
  shootProjectile() {
    const projMesh = new THREE.Mesh(projGeometry, projMaterial);
    //projMesh.castShadow = true;
    //projMesh.receiveShadow = true;
    const projWP = this.shootPivot.getWorldPosition(new THREE.Vector3());
    const projWQ = this.shootPivot.getWorldQuaternion(new THREE.Quaternion());
    //this.cannonCylinderMesh.localToWorld(cannonTipLocal); //?:converte as coordenadas de cannonTipLocal para coordenadas globais em referencia a cannonCylinderMesh
    projMesh.position
      .copy(projWP)
      .add(new THREE.Vector3(0, 0, -(projLenght + 0.1) / 2));

    projMesh.quaternion.copy(projWQ);
    const rigidDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(...projMesh.position.toArray())
      .setRotation(projMesh.quaternion);
    const projBody = this.world.createRigidBody(rigidDesc);
    projBody.userData = { name: "projectile" };
    console.log(
      "this.shootPivot.parent.quaternion",
      this.shootPivot.parent.quaternion.clone().toArray(),
      "projWP",
      projWP.clone().toArray(),
      "\nprojWQ",
      projWQ.clone().toArray(),
      "\nprojMesh.position",
      projMesh.position.clone().toArray(),
      "\nprojMesh.quaternion",
      projMesh.quaternion.clone().toArray(),
      "\nprojBody.translation",
      projBody.translation(),
      "\nprojBody.rotation",
      projBody.rotation()
    );
    const colliderDesc = this.physicsManager.getSimpleColliderDesc(projMesh);
    colliderDesc.setRestitution(0.2); // para colisao elastica
    colliderDesc.setFriction(0.5); //friccao
    this.world.createCollider(colliderDesc, projBody);
    //+: Aplicar velocidade
    const forwardLocal = new THREE.Vector3(0, -1, 0);
   /*  const rotIni = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(Math.PI / 2, 0, 0)
    ); //?: rotacao que foi aplicada a cylinderMesh
    const rotIniInverse = rotIni.clone().invert();
    const forwardWorld = forwardLocal
      .clone()
      .applyQuaternion(projWQ) // leva para o espaço mundo (inclui rotIni + rotação real)
      .applyQuaternion(rotIniInverse) // “retira” o rotIni que estava embutido em projWQ
      .normalize(); */
    forwardLocal.applyQuaternion(projWQ).normalize();
    //console.log("forwardLocal",forwardLocal,"forwardWorld",forwardWorld);
    const vel = new RAPIER.Vector3(
      forwardLocal.x * projLaunchSpeed,
      forwardLocal.y * projLaunchSpeed,
      forwardLocal.z * projLaunchSpeed
    );
    projBody.setLinvel(vel, true);
    //+: Adicionar mesh ao physicsManager e ao sceneManager
    this.sceneManager.addToScene(projMesh);
    this.physicsManager.addMesh(projMesh, projBody, "projectile");

    //+: Adicionar projeteis ativos
    if (!this.activeProjectiles) this.activeProjectiles = [];
    this.activeProjectiles.push({ mesh: projMesh, body: projBody });

    //TODO por enquanto os projeteis sao removidos apos 5 segundos, mas no futuro usar colisoes
    setTimeout(() => {
      this.sceneManager.removeFromScene(projMesh);
      this.physicsManager.removeMesh(projMesh);
      this.activeProjectiles = this.activeProjectiles.filter(
        (p) => p.body.handle !== projBody.handle
      );
      console.log("Projectile removed after timeout:", projMesh);
    }, 5000); // por exemplo, 5 segundos
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
