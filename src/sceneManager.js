import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import {IS_DEBUG} from 'debugManager';

export class SceneManager {
  constructor() {
    this.sceneGraph = new THREE.Scene();
    this.objects = []; // so caso seja preciso, em principio so vou usar sceneGraph
    this.camera = this.createCamera();
    this.renderer = this.createRenderer();
    this.initLights();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    //+: Para controlar a camara
    this._followEnabled = true; //para se a camara deve seguir ou deixar usar orbitControls
    this._followTarget = null;
    this._followOffset = new THREE.Vector3(0, 7, 10);
    this._followLerp = 0.9;
    this.controls.addEventListener("start", () => {
      //+: sempre que o orbitControls seja ativado (ou sejam, o evento start de controls é escutado), desabilita o follow
      this._followEnabled = false;
    });
  }

  createCamera() {
    const fov = 70;
    const aspect = window.innerWidth / window.innerHeight;
    //const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 15); // Posição inicial da câmera
    camera.lookAt(0, 0, 0); // Direção inicial da câmera
    return camera;
  }

  createRenderer() {
    const canvas = document.querySelector("canvas.webgl");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      shadowMapEnabled: true,
      shadowMapType: THREE.PCFSoftShadowMap,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor("rgb(150, 183, 255)", 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement); // Isso diz ao Three.js exatamente onde (em qual elemento canvas) deve renderizar sua cena 3D dentro da página HTML

    return renderer;
  }

  initLights() {
    // 1) Luz ambiente suave para preencher sombras
    const ambient = new THREE.AmbientLight(0xffffff, 0.2);
    this.sceneGraph.add(ambient);

    // 2) HemisphereLight para simular céu vs. chão
    //    (cor do céu acima, cor do chão/reflexão abaixo)
    const hemi = new THREE.HemisphereLight(
      0x87ceeb, // céu azul claro
      0x444444, // chão escuro suave
      0.5 // intensidade
    );
    this.sceneGraph.add(hemi);

    // 3) Key light — a luz principal (direcional como “sol”)
    const key = new THREE.DirectionalLight(0xffffff, 1.0);
    key.position.set(10, 20, 10);
    key.castShadow = true;
    // configuração de sombras (opcional, mas melhora qualidade)
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 100;
    key.shadow.camera.left = -20;
    key.shadow.camera.right = 20;
    key.shadow.camera.top = 20;
    key.shadow.camera.bottom = -20;
    key.shadow.mapSize.set(2048, 2048);
    this.sceneGraph.add(key);

    // 4) Fill light — suaviza contrastes da key light
    const fill = new THREE.DirectionalLight(0xffffff, 0.3);
    fill.position.set(-10, 5, -10);
    this.sceneGraph.add(fill);

    // 5) Rim light (ou back light) — separa objetos do fundo
    const rim = new THREE.PointLight(0xffffff, 0.2, 0, 2);
    rim.position.set(0, 10, -15);
    this.sceneGraph.add(rim);
  }

  addToScene(object) {
    this.sceneGraph.add(object);
  }
  /**
   * @description
   * Define a posição da câmera para seguir um alvo específico.
   * Offset e lerp tambem podem ser ajustados
   * @param {*} targetPosition
   * @param {*} offset
   * @param {*} lerp
   */
  setFollowTarget(
    targetObject3D,
    offset = this._followOffset,
    lerp = this._followLerp
  ) {
    this._followTarget = targetObject3D;
    this._followOffset = offset;
    this._followLerp = lerp;
  }
  enableFollow() {
    this._followEnabled = true;
  }
  /**
   * @description
   * Trata da logica de atualizacao da camara seguir um alvo
   */
  updateCamera() {
    if (!this._followEnabled || !this._followTarget) return;

    const obj = this._followTarget;
    const offsL = this._followOffset.clone();
    offsL.applyQuaternion(obj.quaternion); //+: ficar com o offset em realacao ao world
    this.controls.target.copy(this._followTarget);

    const desiredPos = obj.position.clone().add(offsL);

    //+: Para a camara se posicionar em relacao ao alvo suavemente
    this.camera.position.lerp(desiredPos, this._followLerp);

    //+: muda o ponto para onde orbitsControls olha
    this.controls.target.copy(obj.position);

    //+:pede ao controls para recalcular as matrizes
    this.controls.update();
  }
  renderScene() {
    this.renderer.render(this.sceneGraph, this.camera);
  }

  onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}