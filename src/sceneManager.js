import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

import { IS_DEBUG } from "debugManager";


const hdrPath = import.meta.env.BASE_URL + "hdr";

// TODO fazer esta constante virar parametro dependendo do mapa
const sceneSize = { x: 100, y: 30, z: 100 }; //+: para ser usada nas luzes

const textureLoader = new THREE.TextureLoader();
const rgbeLoader = new RGBELoader();
const gltfLoader = new GLTFLoader();
export class SceneManager {
  constructor() {
    this.sceneGraph = new THREE.Scene();
    this.objects = []; // so caso seja preciso, em principio so vou usar sceneGraph
    this.camera = this.createCamera();
    this.renderer = this.createRenderer();
    this.initLights();
    this.initScene();
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
      //shadowMapEnable: true, //Aparentemente nao funciona assim
      /* shadowMapType: THREE.PCFSoftShadowMap, */
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    //renderer.shadowMap.type = THREE.BasicShadowMap
    //renderer.shadowMap.type = THREE.VSMShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputEncoding = THREE.sRGBEncoding; 
    renderer.toneMappingExposure = 0.4;

    renderer.setPixelRatio(window.devicePixelRatio);
    //renderer.setClearColor("rgb(150, 183, 255)", 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement); // Isso diz ao Three.js exatamente onde (em qual elemento canvas) deve renderizar sua cena 3D dentro da página HTML
    if (IS_DEBUG) {
      //+: para ver o canvas no debug
      renderer.debug.checkShaderErrors = true;
      console.log("renderer", renderer);
    }
    return renderer;
  }
  initScene() {
    console.log("Initializing scene...");
      const texture = rgbeLoader.load(`${hdrPath}/kloppenheim_06_puresky_1k.hdr`);
      if (IS_DEBUG) {
        console.log("HDR texture loaded:", texture);
      }
      texture.mapping = THREE.EquirectangularReflectionMapping;
      this.sceneGraph.background = texture;
      this.sceneGraph.environment = texture;
  
  }

  initLights() {
    //+: Luz ambiente suave para preencher sombras
    const L_ambient = new THREE.AmbientLight(0xffffff, 0.4);
    this.sceneGraph.add(L_ambient);

    //+: HemisphereLight para simular céu vs. chão
    /* const L_hemi = new THREE.HemisphereLight(
      0x87ceeb, // céu azul claro
      0x444444, // chão escuro suave
      0.5 // intensidade
    );
    L_hemi.position.set(0, 25, 0);
    //this.sceneGraph.add(L_hemi);
    if (IS_DEBUG) {
      const hemiHelper = new THREE.HemisphereLightHelper(L_hemi, 5);
      this.sceneGraph.add(hemiHelper);
    } */

    //+: DirectionalLight - sol
    const L_sun = new THREE.DirectionalLight(0xffffa0, 2.8);
    const height = 15;
    L_sun.position.set(0, height, 0); //?: luz de meio dia
    L_sun.castShadow = true;
    // configuração de sombras
    const d = 200;
    L_sun.shadow.camera.near = 0; //distancia minima da camera de sombra
    L_sun.shadow.camera.far = height*2; //disntancia maxima que a camera de sombra ve
    //limites lateriais da ortho-camera
    L_sun.shadow.camera.left = -d;
    L_sun.shadow.camera.right = +d;
    L_sun.shadow.camera.top = +d;
    L_sun.shadow.camera.bottom = -d;
    L_sun.shadow.mapSize.set(4096, 4096);
    this.sceneGraph.add(L_sun);
    if (IS_DEBUG) {
      const dLightHelper = new THREE.DirectionalLightHelper(L_sun, 5);
      this.sceneGraph.add(dLightHelper);
      const helper = new THREE.CameraHelper(L_sun.shadow.camera);
      this.sceneGraph.add(helper);
    }

    //+: Fill light — para suavizar sombras muito fortes da DirectionalLight
    const L_fill = new THREE.DirectionalLight(0xffffff, 0.3);
    L_fill.position.set(-30, 50, -30);
    //this.sceneGraph.add(L_fill);

    //+: Rim light (ou back light) — separa objetos do fundo
    /* const L_rim = new THREE.PointLight(0xffffff, 1.2, 0, 2);
    L_rim.position.set(0, 20, 0);
    this.sceneGraph.add(L_rim);
    if (IS_DEBUG) {
      const rimHelper = new THREE.PointLightHelper(L_rim, 1);
      this.sceneGraph.add(rimHelper);
    } */

    /* const L_spot = new THREE.SpotLight(
      0xffffff, //color
      10000.5, //intensity
      11, //distance - distancia maxima que a luz atinge
      Math.PI / 6, //angle - angulo de abertura do cone
      0.1, //penumbra - quao suave a transicao do cone
      2.1 //decay - quao rapido a luz diminui de intensidade
    );
    L_spot.position.set(0, 10, 0);
    L_spot.castShadow = true;
    this.sceneGraph.add(L_spot);
    if (IS_DEBUG) {
      const spotHelper = new THREE.SpotLightHelper(L_spot);
      this.sceneGraph.add(spotHelper);
    } */
    //TODO Novoeiro
    //this.sceneGraph.fog = new THREE.FogExp2(0xabcdef, 0.0015);
    this.sceneGraph.fog = new THREE.Fog(0x87ceeb, 0, 1000); //+: efeito de atmosfera
  }

  addToScene(object) {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
    object.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    this.sceneGraph.add(object);
    object.updateMatrixWorld;
  }
  addToGround(object) {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
    object.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    //object.shadowMap.mapSize.set(2048, 2048); //+: para melhorar a qualidade das sombras
    this.sceneGraph.add(object);
    object.updateMatrixWorld;
  }
  removeFromScene(object) {
    this.sceneGraph.remove(object);
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
