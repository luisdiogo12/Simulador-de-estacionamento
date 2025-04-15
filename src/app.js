import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d';
import { SceneManager } from './sceneManager.js';
import { PhysicsManager } from './physicsManager.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MapManager } from './map.js';
import Stats from 'stats.js';

export const IS_DEBUG = import.meta.env.DEV; // true em desenvolvimento, false em produção

class App {
    constructor() {
        this.sceneManager = new SceneManager();
        this.physicsManager = new PhysicsManager(this.sceneManager);
        this.mapManager = new MapManager(this.sceneManager, this.physicsManager);
        this.init();
        if (IS_DEBUG) {
            console.log (import.meta.env);
        }
    }

    async init() {
        if (IS_DEBUG) {
            this.physicsManager.initDebugRenderer();
        }
        await this.initScene();
        this.setupEventListeners();
        this.animate();
    }

    async initScene() {
        await this.mapManager.load(); // Carrega o mapa
        if (IS_DEBUG) {
            console.log('Map loaded');
        }

    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.sceneManager.onWindowResize());
        
        document.addEventListener('keydown', (e) => {
            // FIXME : melhorar isto
            const car = this.sceneManager.sceneGraph.getObjectByName("car");
            if (!car || !car.userData.physicsBody){
                console.log('car not found');
                return;
            } 
            const body = car.userData.physicsBody;
            let forceVector = new RAPIER.Vector3(0, 0, 0);
            let torqueVector = new RAPIER.Vector3(0, 0, 0);
            const forceFactor = 500;
            const torqueFactor = 500;
              // para ter em conta a rotação do carro 
            const forward = new THREE.Vector3(0, 0, 1);
            forward.applyQuaternion(car.quaternion);
            forward.normalize();
            console.log('forward:', forward);

            switch (e.code) {
                case 'KeyW': 
                forceVector.x = forward.x * forceFactor;
                forceVector.y = forward.y * forceFactor;
                forceVector.z = forward.z * forceFactor;
                if (IS_DEBUG) {
                    console.log('w pressed -> forward force:', forceVector);
                }
                break;
                case 'KeyS':
                forceVector.x = -forward.x * forceFactor;
                forceVector.y = -forward.y * forceFactor;
                forceVector.z = -forward.z * forceFactor;
                if (IS_DEBUG) {
                    console.log('s pressed -> backward force:', forceVector);
                }
                break;
                case 'KeyA':
                torqueVector.y = torqueFactor;
                if (IS_DEBUG) {
                    console.log('a pressed -> torque:', torqueVector);
                }
                break;
                case 'KeyD':
                torqueVector.y = -torqueFactor;
                if (IS_DEBUG) {
                    console.log('d pressed -> torque:', torqueVector);
                }
                break;
                // FIXME : fazer efeito gradual
                case 'Space':
                    body.setLinvel(new RAPIER.Vector3(0, 0, 0), true);
                    body.setAngvel(new RAPIER.Vector3(0, 0, 0), true);
                    // Reseta forças acumuladas
                    body.resetForces(true);
                    body.resetTorques(true);
                    if (IS_DEBUG) {
                        console.log('space pressed -> braking');
                    }
                break;
            }
            if (forceVector.x !== 0 || forceVector.y !== 0 || forceVector.z !== 0) {
                body.addForce(forceVector, true);
            }
            if (torqueVector.x !== 0 || torqueVector.y !== 0 || torqueVector.z !== 0) {
                body.addTorque(torqueVector, true);
            }
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.physicsManager.syncGraphics();
        this.sceneManager.renderer.render(this.sceneManager.sceneGraph, this.sceneManager.camera);
    }
}

new App();