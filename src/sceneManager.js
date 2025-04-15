import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'stats.js';

// TODO : alterar para "import { IS_DEBUG, initDebugListener, updateDebugStats } from './debug.js';" quando o debbuger estiver pronto
export const IS_DEBUG = import.meta.env.DEV; // true em desenvolvimento, false em produção

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
        if (IS_DEBUG) {
            this.stats = new Stats();
            this.stats.showPanel(0); // 0: FPS, 1: MS, 2: MB
            document.body.appendChild(this.stats.dom);           
        }
    }

    createCamera() {
        const fov = 70;
        const aspect = window.innerWidth / window.innerHeight;
        //const aspect = 2; // the canvas default
        const near = 0.1;
        const far = 1000;
        const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
        camera.position.set(0, 10, 15); // Posição inicial da câmera
        camera.lookAt(0, 0, 0); // Direção inicial da câmera
        return camera;
    }

    createRenderer() {
        const canvas = document.querySelector('canvas.webgl');
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true ,
            shadowMapEnabled: true,
            shadowMapType: THREE.PCFSoftShadowMap
            });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor('rgb(255, 255, 150)', 1.0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild( renderer.domElement ); // Isso diz ao Three.js exatamente onde (em qual elemento canvas) deve renderizar sua cena 3D dentro da página HTML
        
        return renderer;
    }

    initLights() {
        const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)', 0.2);
        this.sceneGraph.add(ambientLight);

        const spotLight = new THREE.SpotLight('rgb(255, 255, 255)', 40);
        spotLight.position.set(-5, 8, 0);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;
        this.sceneGraph.add(spotLight);
    }

    addToScene(object) {
        this.sceneGraph.add(object);
    }

    onWindowResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}