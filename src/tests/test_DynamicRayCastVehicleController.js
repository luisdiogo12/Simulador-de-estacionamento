import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import RAPIER from "@dimforge/rapier3d";

//
const wheelRadius = 1;
const wheelHeight = 0.5;
const wheelRadiusSegments = 32;
const wheelHeightSegments = 1;
const wheelOpenEnded = false;
const wheelThetaStart = 0;
const wheelThetaLength = Math.PI * 2;
const wheelMass = 100;
//
const chassisWidth = 4;
const chassisHeight = 3;
const chassisDepth = 8;
const chassisWidthSegments = 1;
const chassisHeightSegments = 1;
const chassisDepthSegments = 1;
const chassisMass = 1000;
const chassisVolume = chassisWidth * chassisHeight * chassisDepth; // 4*3*8 = 96 m³
const chassisDensity = chassisMass / chassisVolume; // ~1000/96 ≈ 10.4 kg/m³

const chassisCollisionGroup = 0x00020001; // 131073
const wheelCollisionGroup = 0x00040001; // 262145
const floorCollisionGroup = 0x00010001; // 65537
// addWheel
const suspensionRestLength = 0.5;
// set
const indexUpAxis = 1; // y
const indexForwardAxis = 0; // x
const wheelAxleCs = { x: 0, y: -1, z: 0 }; //Vector - y
const wheelBrake = 1;
const wheelChassisConnectionPointCs = { x: 0, y: 0, z: 0 }; //Vector
const wheelDirectionCs = { x: 0, y: -1, z: 0 }; //Vector
const wheelEngineForce = 1;
const wheelFrictionSlip = 1;
const wheelMaxSuspensionForce = 1;
const wheelMaxSuspensionTravel = 1;
const wheelSideFrictionStiffness = 1;
const wheelSteering = 1;
const wheelSuspensionCompression = 1;
const wheelSuspensionRelaxation = 1;
const wheelSuspensionRestLength = 1;
const wheelSuspensionStiffness = 1;

class RapierDebugRenderer {
  log_options = {
    connCs_dirCs_axleCs_suspLen: true,
    colliders: true,
  };
  mesh;
  world;
  scene;
  vehicles = []; // vai guardar {chassisBody, controller, wheelDebug[]}

  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.mesh = new THREE.LineSegments(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: 0xffffff, vertexColors: true })
    );
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
  }
  /**
   * Regista um veículo para debug.
   * @param {RAPIER.RigidBody} chassisBody
   * @param {RAPIER.RayCastVehicle} controller
   */
  addVehicle(chassisBody, controller) {
    const wheelCount = controller.numWheels();
    const wheelDebug = [];

    for (let i = 0; i < wheelCount; i++) {
      // seta da suspensão (amarela)
      const arrowSusp = new THREE.ArrowHelper(
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(),
        1,
        0xffff00,
        0.2, // tamanho da cabeça
        0.1 // largura da cabeça
      );
      this.scene.add(arrowSusp);

      // seta do eixo (verde)
      const arrowAxle = new THREE.ArrowHelper(
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(),
        0.5,
        0x00ff00
      );
      this.scene.add(arrowAxle);

      // esfera de contacto (vermelha)
      const contactSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xff00f0 })
      );
      this.scene.add(contactSphere);

      wheelDebug.push({ arrowSusp, arrowAxle, contactSphere });
    }

    this.vehicles.push({ chassisBody, controller, wheelDebug });
  }

  update() {
    if (this.log_options.colliders) {
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

      this.#updateVehicleController();
    } else {
      this.mesh.visible = false;
    }
  }
  #updateVehicleController() {
    for (const { chassisBody, controller, wheelDebug } of this.vehicles) {
      // posição e rotação do chassis
      const p = chassisBody.translation();
      const q = chassisBody.rotation();
      const chassisPos = new THREE.Vector3(p.x, p.y, p.z);
      const chassisQuat = new THREE.Quaternion(q.x, q.y, q.z, q.w);

      for (let i = 0; i < wheelDebug.length; i++) {
        const dbg = wheelDebug[i];

        // lê do controller
        const connCs = controller.wheelChassisConnectionPointCs(i);
        const dirCs = controller.wheelDirectionCs(i);
        const axleCs = controller.wheelAxleCs(i);
        const suspLen = controller.wheelSuspensionLength(i);
        if (this.log_options.connCs_dirCs_axleCs_suspLen) {
          console.log(
            `RapierDebugRenderer: ${i} 
          connCs: (${connCs.x},${connCs.y},${connCs.z}),
          dirCs: (${dirCs.x},${dirCs.y},${dirCs.z}),
          axleCs: (${axleCs.x},${axleCs.y},${axleCs.z}), 
          suspLen: ${suspLen}`
          );
        }

        // local → world
        const connLocal = new THREE.Vector3(connCs.x, connCs.y, connCs.z);
        const dirLocal = new THREE.Vector3(dirCs.x, dirCs.y, dirCs.z);
        const axleLocal = new THREE.Vector3(axleCs.x, axleCs.y, axleCs.z);

        const connWorld = connLocal
          .clone()
          .applyQuaternion(chassisQuat)
          .add(chassisPos);

        const dirWorld = dirLocal
          .clone()
          .applyQuaternion(chassisQuat)
          .normalize();

        const axleWorld = axleLocal
          .clone()
          .applyQuaternion(chassisQuat)
          .normalize();

        // seta da suspensão
        dbg.arrowSusp.position.copy(connWorld);
        dbg.arrowSusp.setDirection(dirWorld);
        dbg.arrowSusp.setLength(suspLen);

        // seta do eixo
        dbg.arrowAxle.position.copy(connWorld);
        dbg.arrowAxle.setDirection(axleWorld);
        dbg.arrowAxle.setLength(0.5);

        // ponto de contacto
        const contactWorld = connWorld
          .clone()
          .add(dirWorld.clone().multiplyScalar(suspLen));
        dbg.contactSphere.position.copy(contactWorld);
        const rayLength =
          suspensionRestLength + controller.wheelMaxSuspensionTravel(); // ou outro valor de teste
        // seta cyan para o “raio” completo
        const arrowDebug = new THREE.ArrowHelper(
          dirWorld, // direção local da suspensão
          connWorld, // ponto de origem
          rayLength, // comprimento
          0x00ffff, // cor
          0.2, // tamanho da cabeça
          0.1 // largura da cabeça
        );
        this.scene.add(arrowDebug);
        const hitPoint = connWorld
          .clone()
          .add(dirWorld.clone().multiplyScalar(suspLen));
        const hitSphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.09, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0xff0000 })
        );
        hitSphere.position.copy(hitPoint);
        this.scene.add(hitSphere);
      }
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
  world;
  mesh;
  body;
  collider;
  constructor(world, name, position, chassisBody, isSteerable = false) {
    this.world = world;
    this.mesh = this.#makeMesh(name, position);
    /*     scene.add(this.mesh);
    scene.updateMatrixWorld(true); */
    const globalPos = new THREE.Vector3();
    this.mesh.getWorldPosition(globalPos);
    const globalQuat = new THREE.Quaternion();
    this.mesh.getWorldQuaternion(globalQuat);
    console.log(
      `CarWheel: ${name} globalPos: ${globalPos.toArray()} globalQuat: ${globalQuat.toArray()}`
    );

    //this.body = this.#makeBody(position, globalPos, globalQuat);
    //this.collider = this.#makeCollider(position, globalPos, globalQuat);
  }
  #makeMesh(name, position) {
    const material = new THREE.MeshPhongMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3,
    });
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(
        wheelRadius,
        wheelRadius,
        wheelHeight,
        wheelRadiusSegments
      ),
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
      //.setTranslation(position.x, position.y, position.z)
      .setRotation(globalQuat)
      /* .setAdditionalMassProperties(
                1000, // mass
                { x: 0, y: 0, z: -4 }, // centerOfMass
                { x: 1453.3, y: 1666.7, z: 453.3 }, // Momentos de inércia aproximados (em kg·m²)   
                { w: 1, x: 0, y: 0, z: 0 } // Quat. identidade para o tensor (alinhado com os eixos do carro)
              ) */
      .setCanSleep(false);
    return this.world.createRigidBody(rigidBodyDesc);
  }
  #makeCollider(position, globalPos, globalQuat) {
    const colliderDesc = RAPIER.ColliderDesc.cylinder(
      wheelHeight / 2,
      wheelRadius
    )
      //.setTranslation(...globalPos) // para deslocar o colisor
      //.setTranslation(position.x, position.y, position.z)
      //.setRotation(globalQuat) // para alinhar o colisor com o mesh
      .setFriction(3)
      .setRestitution(0.1)
      .setDensity(0) // o colisor não contribuirá com massa
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
      .setCollisionGroups(wheelCollisionGroup); // importante para as joints 262145 = 0x00040001, pertence ao grupo 1 e pode colidir com o grupo 4
    return this.world.createCollider(colliderDesc, this.body);
  }
}
class CarChassis {
  world;
  mesh;
  body;
  collider;
  constructor(world, position) {
    this.world = world;
    this.mesh = this.#makeMesh(position);

    const globalPos = new THREE.Vector3();
    this.mesh.getWorldPosition(globalPos);
    const globalQuat = new THREE.Quaternion();
    this.mesh.getWorldQuaternion(globalQuat);
    console.log(
      `CarChassis: globalPos: ${globalPos.toArray()} globalQuat: ${globalQuat.toArray()}`
    );

    this.body = this.#makeBody(position, globalPos, globalQuat);
    this.collider = this.#makeCollider(position, globalPos, globalQuat);
  }
  #makeMesh(position) {
    const chassisMaterial = new THREE.MeshPhongMaterial({
      color: 0xaaa000,
      transparent: true,
      opacity: 0.3,
    });
    const carChassis = new THREE.Mesh(
      new THREE.BoxGeometry(chassisWidth, chassisHeight, chassisDepth),
      chassisMaterial
    );
    carChassis.position.set(position.x, position.y, position.z);
    carChassis.name = "carChassis";
    return carChassis;
  }
  #makeBody(position, globalPos, globalQuat) {
    const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      //.setTranslation(position.x, position.y, position.z)
      .setTranslation(...globalPos)
      //.setRotation()
      //.setAdditionalMass(1000)
      /* .setAdditionalMassProperties(
                1000, // mass
                { x: 0, y: 0, z: -4 }, // centerOfMass
                { x: 1453.3, y: 1666.7, z: 453.3 }, // Momentos de inércia aproximados (em kg·m²)   
                { w: 1, x: 0, y: 0, z: 0 } // Quat. identidade para o tensor (alinhado com os eixos do carro)
              )  */
      .setCanSleep(false);
    return this.world.createRigidBody(rigidBodyDesc);
  }
  #makeCollider(position, globalPos, globalQuat) {
    const colliderDesc = RAPIER.ColliderDesc.cuboid(
      chassisWidth / 2,
      chassisHeight / 2,
      chassisDepth / 2
    )
      //.setTranslation(position.x, position.y, position.z) // para deslocar o colisor
      //.setTranslation(...globalPos) // para deslocar o colisor
      .setFriction(3)
      .setRestitution(0.1) // para o colisor não saltar
      .setDensity(chassisDensity) // o colisor não contribuirá com massa
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
      .setCollisionGroups(chassisCollisionGroup); // importante para as joints 131073 = 0x00020001, pertence ao grupo 1 e pode colidir com o grupo 2
    return this.world.createCollider(colliderDesc, this.body);
  }
}
class Car {
  log_options = {
    update_timestep: true, // Encapsula animate_log em um objeto
    pCh_qCh: true,
    pW_qW: true,
  };
  world;
  keyMap;
  wheelDebug;
  CarGroup;
  CarChassis;
  wheelFR;
  wheelBL;
  wheelBR;
  constructor(keyMap, world) {
    this.world = world;
    this.keyMap = keyMap;
    this.CarGroup = new THREE.Group();
    this.CarGroup.name = "car";
    this.CarChassis = new CarChassis(this.world, { x: 0, y: 3, z: 0 });
    this.CarGroup.add(this.CarChassis.mesh);
    this.wheelFL = new CarWheel(
      this.world,
      "wheelFL",
      { x: -2.4, y: 2, z: 3 },
      this.CarChassis.body,
      true
    );
    this.wheelFR = new CarWheel(
      this.world,
      "wheelFR",
      { x: 2.4, y: 2, z: 3 },
      this.CarChassis.body,
      true
    );
    this.wheelBL = new CarWheel(
      this.world,
      "wheelBL",
      { x: -2.4, y: 2, z: -3 },
      this.CarChassis.body,
      false
    );
    this.wheelBR = new CarWheel(
      this.world,
      "wheelBR",
      { x: 2.4, y: 2, z: -3 },
      this.CarChassis.body,
      false
    );
    this.CarWheels = new THREE.Group();
    this.CarWheels.name = "CarWheels";
    this.CarWheels.add(this.wheelFL.mesh);
    this.CarWheels.add(this.wheelFR.mesh);
    this.CarWheels.add(this.wheelBL.mesh);
    this.CarWheels.add(this.wheelBR.mesh);
    this.CarGroup.add(this.CarWheels);
    logObject(this.CarGroup);

    this.vehicleController = this.world.createVehicleController(
      this.CarChassis.body
    );
/*     console.log(
      "this.wheelFL.mesh.position.y - wheelRadius: ",
      this.wheelFL.mesh.position.y - wheelRadius
    ); */
    const wheelParams = {
      suspensionRestLength: 1.0, // altura “ao repouso”
      suspensionStiffness: 50.0, // rigidez da mola
      maxSuspensionForce: 2000.0, // força máxima
      maxSuspensionTravel: 2, // altura máxima da mola
      suspensionCompression: 4.4, // damping compressão
      suspensionRelaxation: 2.3, // damping relaxação
      frictionSlip: 5.0, // aderência ao solo
    };
    const wheels = [this.wheelFL, this.wheelFR, this.wheelBL, this.wheelBR];
    for (let i = 0; i < 4; i++) {
      let space = 0.5;
      const w = wheels[i];
      if (i % 2 != 0) {
        space = -0.5;
      }
      this.vehicleController.addWheel(
        {
          x: w.mesh.position.x - this.CarChassis.mesh.position.x + space,
          y: w.mesh.position.y - this.CarChassis.mesh.position.y,
          z: w.mesh.position.z - this.CarChassis.mesh.position.z,
        }, // chassisConnectionCs: Vector  - espaço local do chassis
        new RAPIER.Vector3(0, -1, 0), // directionCs: Vector          - Se o chassis está orientado com Y para cima, use (0, -1, 0)
        new RAPIER.Vector3(-1, 0, 0), // axleCs: Vector               - Se a roda está rotacionada 90 graus em torno do eixo Z, o eixo de rotação é X
        wheelParams.suspensionRestLength, // suspensionRestLength: number - Posição Y da roda relativa ao chassis
        wheelRadius // radius: number
      );
      //Sets the maximum distance the i-th wheel suspension can travel before and after its resting length.
      this.vehicleController.setWheelMaxSuspensionTravel({
        i,
        value: wheelParams.maxSuspensionTravel,
      });
      //Sets the i-th wheel’s suspension stiffness.Increase this value if the suspension appears to not push the vehicle strong enough.
      this.vehicleController.setWheelSuspensionStiffness({
        i,
        value: wheelParams.suspensionStiffness,
      });
      //Sets the maaximum force applied by the i-th wheel’s suspension.
      this.vehicleController.setWheelMaxSuspensionForce({
        i,
        value: wheelParams.maxSuspensionForce,
      });
      //The i-th wheel’s suspension’s damping when it is being compressed.
      this.vehicleController.setWheelSuspensionCompression({
        i,
        value: wheelParams.suspensionCompression,
      });
      //Sets the i-th wheel’s suspension’s damping when it is being released.Increase this value if the suspension appears to overshoot.
      this.vehicleController.setWheelSuspensionRelaxation({
        i,
        value: wheelParams.suspensionRelaxation,
      });
      //Sets the parameter controlling how much traction the tire has.The larger the value, the more instantaneous braking will happen (with the risk of causing the vehicle to flip if it’s too strong).
      this.vehicleController.setWheelFrictionSlip({
        i,
        value: wheelParams.frictionSlip,
      });
    }
    /* this.vehicleController.addWheel(
      {
        x: this.wheelFL.mesh.position.x - this.CarChassis.mesh.position.x + 0.5,
        y: this.wheelFL.mesh.position.y - this.CarChassis.mesh.position.y,
        z: this.wheelFL.mesh.position.z - this.CarChassis.mesh.position.z,
      }, // chassisConnectionCs: Vector  - espaço local do chassis
      new RAPIER.Vector3(0, -1, 0), // directionCs: Vector          - Se o chassis está orientado com Y para cima, use (0, -1, 0)
      new RAPIER.Vector3(-1, 0, 0), // axleCs: Vector               - Se a roda está rotacionada 90 graus em torno do eixo Z, o eixo de rotação é X
      suspensionRestLength, // suspensionRestLength: number - Posição Y da roda relativa ao chassis
      wheelRadius // radius: number
    );
    this.vehicleController.addWheel(
      {
        x: this.wheelFR.mesh.position.x - this.CarChassis.mesh.position.x - 0.5,
        y: this.wheelFR.mesh.position.y - this.CarChassis.mesh.position.y,
        z: this.wheelFR.mesh.position.z - this.CarChassis.mesh.position.z,
      }, // chassisConnectionCs: Vector  - espaço local do chassis
      new RAPIER.Vector3(0, -1, 0), // directionCs: Vector          - Se o chassis está orientado com Y para cima, use (0, -1, 0)
      new RAPIER.Vector3(-1, 0, 0), // axleCs: Vector               - Se a roda está rotacionada 90 graus em torno do eixo Z, o eixo de rotação é X
      suspensionRestLength, //this.wheelFR.mesh.position.y, // suspensionRestLength: number - Posição Y da roda relativa ao chassis
      wheelRadius // radius: number
    );
    this.vehicleController.addWheel(
      {
        x: this.wheelBL.mesh.position.x - this.CarChassis.mesh.position.x + 0.5,
        y: this.wheelBL.mesh.position.y - this.CarChassis.mesh.position.y,
        z: this.wheelBL.mesh.position.z - this.CarChassis.mesh.position.z,
      }, // chassisConnectionCs: Vector  - espaço local do chassis
      new RAPIER.Vector3(0, -1, 0), // directionCs: Vector          - Se o chassis está orientado com Y para cima, use (0, -1, 0)
      new RAPIER.Vector3(-1, 0, 0), // axleCs: Vector               - Se a roda está rotacionada 90 graus em torno do eixo Z, o eixo de rotação é X
      suspensionRestLength, //this.wheelBL.mesh.position.y, // suspensionRestLength: number - Posição Y da roda relativa ao chassis
      wheelRadius // radius: number
    );
    this.vehicleController.addWheel(
      {
        x: this.wheelBR.mesh.position.x - this.CarChassis.mesh.position.x - 0.5,
        y: this.wheelBR.mesh.position.y - this.CarChassis.mesh.position.y,
        z: this.wheelBR.mesh.position.z - this.CarChassis.mesh.position.z,
      }, // chassisConnectionCs: Vector  - espaço local do chassis
      new RAPIER.Vector3(0, -1, 0), // directionCs: Vector          - Se o chassis está orientado com Y para cima, use (0, -1, 0)
      new RAPIER.Vector3(-1, 0, 0), // axleCs: Vector               - Se a roda está rotacionada 90 graus em torno do eixo Z, o eixo de rotação é X
      suspensionRestLength, //this.wheelBR.mesh.position.y, // suspensionRestLength: number - Posição Y da roda relativa ao chassis
      wheelRadius // radius: number
    ); */

    //Sets the chassis’ local up direction (0 = x, 1 = y, 2 = z).
    //this.vehicleController.indexUpAxis =  indexUpAxis;

    //Sets the chassis’ local forward direction (0 = x, 1 = y, 2 = z).
    //this.vehicleController.setIndexForwardAxis =  indexForwardAxis;

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


    //The multiplier of friction between a tire and the collider it’s on top of.The larger the value, the stronger side friction will be.
    //this.vehicleController.setWheelSideFrictionStiffness({i: number, value: number});

    //Sets the steering angle (radians) for the i-th wheel.
    //this.vehicleController.setWheelSteering({i: number, value: number});


    //Sets the rest length of the i-th wheel’s suspension spring.
    //this.vehicleController.setWheelSuspensionRestLength({i: number, value: number});

    //Updates the vehicle’s velocity based on its suspension, engine force, and brake.This directly updates the velocity of its chassis rigid-body.
    //this.vehicleController.updateVehicle({dt: number, filterFlags?: QueryFilterFlags, filterGroups?: number, filterPredicate?: ((collider: Collider) => boolean)});

    //provavelmente nao precisos:
    //Sets the i-th wheel’s radius.
    //this.vehicleController.setWheelRadius({i: number, value: number});
    console.log("this.vehicleController", this.vehicleController);
  }
  async init(scene, position) {
    scene.add(this.CarGroup);
  }

  update() {
    this.#updateCommands();
    if (this.log_options.update_timestep) {
      console.log(`this.world.timestep : ${this.world.timestep}`);
    }
    //this.vehicleController.updateVehicle({ dt: this.world.timestep }); //dt: number, filterFlags?: QueryFilterFlags, filterGroups?: number, filterPredicate?: ((collider: Collider) => boolean)
    this.vehicleController.updateVehicle(this.world.timestep);
    //this.vehicleController.updateVehicle(world.integrationParameters.dt);
    // 2) Sincroniza o chassis
    const pCh = this.CarChassis.body.translation();
    const qCh = this.CarChassis.body.rotation();
    if (this.log_options.pCh_qCh) {
      console.log(
        `pCh: (${pCh.x}, ${pCh.y}, ${pCh.z})
qCh: (${qCh.x}, ${qCh.y}, ${qCh.z}, ${qCh.w})`
      );
    }
    this.CarChassis.mesh.position.set(pCh.x, pCh.y, pCh.z);
    this.CarChassis.mesh.quaternion.set(qCh.x, qCh.y, qCh.z, qCh.w);

    // 3) Sincroniza cada roda
    /* [this.wheelFL, this.wheelFR, this.wheelBL, this.wheelBR].forEach((w) => {
      const pW = w.body.translation();
      const qW = w.body.rotation();
      if (this.log_options.pW_qW) {
        console.log(
`pW: (${pW.x}, ${pW.y}, ${pW.z})
qW: (${qW.x}, ${qW.y}, ${qW.z}, ${qW.w})`
        );
      }
      w.mesh.position.set(pW.x, pW.y, pW.z);
      w.mesh.quaternion.set(qW.x, qW.y, qW.z, qW.w);
    }); */
  }
  #updateCommands() {
    const FL = 0,
      FR = 1,
      BL = 2,
      BR = 3;
    // Força máxima de motor e ângulo máximo de direção
    const maxEngineForce = 2000;
    const maxSteeringAngle = 0.4; // cerca de ~23º
    // 1) Motor (W/S)
    let engineForce = 0;
    if (keyMap["KeyW"]) engineForce = maxEngineForce;
    if (keyMap["KeyS"]) engineForce = -maxEngineForce;

    // Aplica a força às quatro rodas motrizes (ou só traseiras, se quiseres)
    this.vehicleController.setWheelEngineForce({ i: FL, value: engineForce });
    this.vehicleController.setWheelEngineForce({ i: FR, value: engineForce });
    // this.vehicleController.setWheelEngineForce({ i: BL, value: engineForce });
    // this.vehicleController.setWheelEngineForce({ i: BR, value: engineForce });

    // 2) Direção (A/D)
    let steer = 0;
    if (keyMap["KeyA"]) steer = maxSteeringAngle;
    if (keyMap["KeyD"]) steer = -maxSteeringAngle;

    // Às rodas dianteiras apenas
    this.vehicleController.setWheelSteering({ i: FL, value: steer });
    this.vehicleController.setWheelSteering({ i: FR, value: steer });

    // 3) Travão de mão ou travão normal (Space)
    const brakeForce = keyMap["Space"] ? 100 : 0;
    this.vehicleController.setWheelBrake({ i: FL, value: brakeForce });
    this.vehicleController.setWheelBrake({ i: FR, value: brakeForce });
    this.vehicleController.setWheelBrake({ i: BL, value: brakeForce });
    this.vehicleController.setWheelBrake({ i: BR, value: brakeForce });
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
  floorCollisionGroup
);
world.createCollider(floorShape, floorBody);

const car = new Car(keyMap, world);
await car.init(scene, world, [0, 1, 0]);
rapierDebugRenderer.addVehicle(car.CarChassis.body, car.vehicleController);

const stats = new Stats();
document.body.appendChild(stats.dom);
//
//GUI
//
const gui = new GUI();
//debug
const debugOptions = {
  animate_log: true, // Encapsula animate_log em um objeto
};
const debugFolder = gui.addFolder("Debug");
debugFolder
  .add(rapierDebugRenderer.log_options, "colliders")
  .name("Rapier Colliders");
debugFolder
  .add(rapierDebugRenderer.log_options, "connCs_dirCs_axleCs_suspLen")
  .name("Rapier connCs,dirCs,axleCs,suspLen Log");
debugFolder.add(debugOptions, "animate_log").name("Animate Log");
//Physics
const physicsFolder = gui.addFolder("Physics");
physicsFolder.add(world.gravity, "x", -100.0, 100.0, 0.1);
physicsFolder.add(world.gravity, "y", -100.0, 100.0, 0.1);
physicsFolder.add(world.gravity, "z", -100.0, 100.0, 0.1);
//Car
const carFolder = gui.addFolder("Car - para afinar parametros do carro");
//Simulação
const sim = {
  autoStep: false,
  requestStep: false, // flag para um único passo
  timestep: 1 / 60, // valor inicial ≃ 0.016s
  step() {
    this.requestStep = true; // quando o user clica, marca um passo
  },
};
const simFolder = gui.addFolder("Simulação");
simFolder.add(sim, "autoStep").name("Auto-step");
simFolder.add(sim, "step").name("Step");
simFolder.add(world, "timestep", 0.001, 0.1, 0.001).name("Time Step (s)");
const clock = new THREE.Clock();
let delta;
const _step = world.step.bind(world);
world.stepCount = 0;
// substitui por uma versão que incrementa o contador
world.step = (...args) => {
  world.stepCount++;
  return _step(...args);
};

world.integrationParameters.dt = 1.0 / 60.0;
let isZeroStep = true;
function animate() {
  requestAnimationFrame(animate);

  //delta = clock.getDelta();
  //world.timestep = Math.min(delta, 0.1);
  // só avança a física se autoStep==true **ou** se alguém pediu um step
  if (sim.autoStep || sim.requestStep || isZeroStep) {
    console.log(
      `----------------------------------------------------------------------------------------------------------------`
    );

    if (!isZeroStep) {
      car.update(); // se o seu update() passar dt, injete sim.timestep
      world.step(); // If you swap that order, you’ll be applying forces after integration, which can lead to one-frame delays and buildup of bad impulses.
      sim.requestStep = false;
    }
    isZeroStep = false;
    rapierDebugRenderer.update();
    if (debugOptions.animate_log) {
      const chassisPos = car.CarChassis.body.translation();
      const chassisQuat = car.CarChassis.body.rotation();
      /* const wheelFLPos = car.wheelFL.body.translation();
      const wheelFRPos = car.wheelFR.body.translation();
      const wheelBLPos = car.wheelBL.body.translation();
      const wheelBRPos = car.wheelBR.body.translation();
      const wheelFLQuat = car.wheelFL.body.rotation();
      const wheelFRQuat = car.wheelFR.body.rotation();
      const wheelBLQuat = car.wheelBL.body.rotation();
      const wheelBRQuat = car.wheelBR.body.rotation(); */

      console.log(
        `
  STEPCOUNT: ${world.stepCount}
  BODY POSITIONS:
      chassis.Pos: ${chassisPos.x}, ${chassisPos.y}, ${chassisPos.z}
      chassis.Rot: ${chassisQuat.x}, ${chassisQuat.y}, ${chassisQuat.z}, ${chassisQuat.w}
      ` /*wheelFL.Pos: ${wheelFLPos.x}, ${wheelFLPos.y}, ${wheelFLPos.z}
      wheelFL.Rot: ${wheelFLQuat.x}, ${wheelFLQuat.y}, ${wheelFLQuat.z}, ${wheelFLQuat.w}
      wheelFR.Pos: ${wheelFRPos.x}, ${wheelFRPos.y}, ${wheelFRPos.z}
      wheelFR.Rot: ${wheelFRQuat.x}, ${wheelFRQuat.y}, ${wheelFRQuat.z}, ${wheelFRQuat.w}
      wheelBL.Pos: ${wheelBLPos.x}, ${wheelBLPos.y}, ${wheelBLPos.z}
      wheelBL.Rot: ${wheelBLQuat.x}, ${wheelBLQuat.y}, ${wheelBLQuat.z}, ${wheelBLQuat.w}
      wheelBR.Pos: ${wheelBRPos.x}, ${wheelBRPos.y}, ${wheelBRPos.z}
      wheelBR.Rot: ${wheelBRQuat.x}, ${wheelBRQuat.y}, ${wheelBRQuat.z}, ${wheelBRQuat.w}*/
      );
    }
  }


  //car.update(delta);

  //rapierDebugRenderer.update();

  renderer.render(scene, camera);

  stats.update();
}

animate();
