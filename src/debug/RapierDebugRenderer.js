import * as THREE from 'three'
import * as RAPIER from "@dimforge/rapier3d";


export class RapierDebugRenderer {
  log_options = {
    enabled: true,
    connCs_dirCs_axleCs_suspLen: true,
    colliders: true,
  };
  mesh;
  world;
  sceneManager;
  vehicles = []; // vai guardar {chassisBody, controller, wheelDebug[]}

  constructor(sceneManager, world) {
    this.sceneManager = sceneManager;
    this.world = world;
    this.mesh = new THREE.LineSegments(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({
        color: "lime",
        vertexColors: true,
      })
    );
    this.mesh.frustumCulled = false;
    this.sceneManager.addToScene(this.mesh);
  }
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
      this.sceneManager.addToScene(arrowSusp);

      // seta do eixo (verde)
      const arrowAxle = new THREE.ArrowHelper(
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(),
        0.5,
        0x00ff00
      );
      this.sceneManager.addToScene(arrowAxle);

      // esfera de contacto (vermelha)
      const contactSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xff00f0 })
      );
      this.sceneManager.addToScene(contactSphere);

      wheelDebug.push({ arrowSusp, arrowAxle, contactSphere });
    }

    this.vehicles.push({ chassisBody, controller, wheelDebug });
  }
  update() {
    if (this.log_options.enabled) {
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
      //this.#updateVehicleController();
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
          .addToScene(chassisPos);

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
          .addToScene(dirWorld.clone().multiplyScalar(suspLen));
        dbg.contactSphere.position.copy(contactWorld);
        const rayLength =
          controller.wheelSuspensionRestLength(i) +
          controller.wheelMaxSuspensionTravel(); // ou outro valor de teste
        // seta cyan para o “raio” completo
        const arrowDebug = new THREE.ArrowHelper(
          dirWorld, // direção local da suspensão
          connWorld, // ponto de origem
          rayLength, // comprimento
          0x00ffff, // cor
          0.2, // tamanho da cabeça
          0.1 // largura da cabeça
        );
        this.sceneManager.addToScene(arrowDebug);
        const hitPoint = connWorld
          .clone()
          .add(dirWorld.clone().multiplyScalar(suspLen));
        const hitSphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.09, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0xff0000 })
        );
        hitSphere.position.copy(hitPoint);
        this.sceneManager.addToScene(hitSphere);
      }
    }
  }
}