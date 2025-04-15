import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d';
import Stats from 'stats.js';
//import { DEBUG_CONFIG } from '../../testRapier/src/debug';

// TODO : alterar para "import { IS_DEBUG, initDebugListener, updateDebugStats } from './debug.js';" quando o debbuger estiver pronto
export const IS_DEBUG = import.meta.env.DEV; // true em desenvolvimento, false em produção

const gravity = { x: 0.0, y: -9.81, z: 0.0 };
let debugGeometry, debugLines;

export class PhysicsManager {
    constructor(sceneManager) {
        this.world = new RAPIER.World(gravity);
        this.eventQueue = new RAPIER.EventQueue(true);
        this.sceneManager = sceneManager;
        //this.objects = objects;
        //TODO : ver se preciso disto 
        //this.dt = 1 / 60;
        if (IS_DEBUG) {
                    
        }
    }

    //TODO : melhorar os colideres do chão, de modo a incluir formais mais complexas, experimentar Trimesh
    addGround(ground, bodyType = 'fixed', colliderType = 'cuboid') {
        const groundBodyDesc = RAPIER.RigidBodyDesc.fixed(); // descriptor para corpo fixo
        groundBodyDesc.setTranslation(0, 0, 0);//TODO : alterar aqui para uma variavel 
        const groundBody = this.world.createRigidBody(groundBodyDesc);
        const groundColliderDesc = RAPIER.ColliderDesc.cuboid(80, 0.5, 48); //TODO : alterar aqui para uma variavel // Half-extents (metade do tamanho)
        groundColliderDesc.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
        const groundCollider = this.world.createCollider(groundColliderDesc, groundBody);
        ground.userData.physicsBody = groundBody; 
        ground.userData.collisions = new Set(); // para em cada objeto saber com quem colidiu
    }
//FIXME : metodo provisorio
    addCar(car){
        const globalPos = new THREE.Vector3();
        const globalQuat = new THREE.Quaternion();
        car.getWorldPosition(globalPos);
        car.getWorldQuaternion(globalQuat);
        if(IS_DEBUG){
            console.log(car.name , 'position:', globalPos);
            console.log(car.name , 'quaternion:', globalQuat);
        }

        const bodyDesc = RAPIER.RigidBodyDesc.dynamic();
        bodyDesc.setTranslation(globalPos.x, globalPos.y, globalPos.z);
        bodyDesc.setRotation(globalQuat);
        bodyDesc.setAdditionalMassProperties(
            1000,                           // mass
            { x: 0, y: 0, z: -4 },           // centerOfMass
            { x: 1453.3, y: 1666.7, z: 453.3 },  // Momentos de inércia aproximados (em kg·m²)
            { w: 1, x: 0, y: 0, z: 0 }           // Quat. identidade para o tensor (alinhado com os eixos do carro)
          );
        const body = this.world.createRigidBody(bodyDesc);
        const colliderDesc = RAPIER.ColliderDesc.cuboid(4, 3.5, 8); 
        colliderDesc.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
        colliderDesc.setTranslation(0,3,0); // para deslocar o colisor
        colliderDesc.setDensity(0); // o colisor não contribuirá com massa
        const groundCollider = this.world.createCollider(colliderDesc, body);
        car.userData.physicsBody = body; 
        car.userData.collisions = new Set(); 
    }
    #createBody(mesh, bodyType = 'dynamic', colliderType = 'cuboid') {
         const bodyDesc = bodyType === 'fixed' ? 
                    RAPIER.RigidBodyDesc.fixed() : 
                    RAPIER.RigidBodyDesc.dynamic();
    }
    #getColliderDesc(type, scale) {
        switch(type) {
            case 'sphere':
                return RAPIER.ColliderDesc.ball(scale.x);
            case 'cylinder':
                return RAPIER.ColliderDesc.cylinder(scale.y, scale.x);
            /* case 'trimesh':
                return this.createTrimeshCollider(scale); */
            default: // cuboid
                return RAPIER.ColliderDesc.cuboid(
                    scale.x / 2,
                    scale.y / 2,
                    scale.z / 2
                );
        }
    }
    addConstraint(constraint) {
        /* this.world.addConstraint(constraint); */
    }

    update() {
        this.world.step(this.eventQueue);
    }
    syncGraphics() {
        this.update();
        this.sceneManager.sceneGraph.traverse((node) => {
            if (/* node.isMesh && */ node.userData.physicsBody) {
                const body = node.userData.physicsBody;
                // Se for um corpo 'fixed', não sincroniza
                if (body.bodyType() === RAPIER.RigidBodyType.Fixed) {
                return; 
                }
                // faça a sincronização de posição/rotação
                // 1) Pega a posição global do body
                const t = body.translation(); 
                const worldPos = new THREE.Vector3(t.x, t.y, t.z);

                // 2) Converte para espaço local do pai
                node.parent.worldToLocal(worldPos);
                node.position.copy(worldPos);

                // 3) Pega rotação global do body
                const worldRot = body.rotation();
                const worldQuat = new THREE.Quaternion(worldRot.x, worldRot.y, worldRot.z, worldRot.w);

                // 4) Precisamos remover a rotação do pai
                const parentQuat = new THREE.Quaternion();
                node.parent.getWorldQuaternion(parentQuat);
                parentQuat.invert();

                // localRot = inv(parentRot) * worldRot
                node.quaternion.copy(parentQuat).multiply(worldQuat);
            }
        });       
        
        if (IS_DEBUG){
            const { vertices, colors } = this.world.debugRender();
            // Atualizar geometria
            debugGeometry.setAttribute(
              'position', 
              new THREE.BufferAttribute(vertices, 3)
            );
            debugGeometry.setAttribute(
              'color', 
              new THREE.BufferAttribute(
                new Uint8Array(colors).map(c => c / 255), 
                3,
                true
              )
            );
            debugGeometry.attributes.position.needsUpdate = true;
            debugGeometry.attributes.color.needsUpdate = true;    
        }
    }
    initDebugRenderer() {
        debugGeometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({
          vertexColors: true,
          linewidth: 10
        });
        
        debugLines = new THREE.LineSegments(debugGeometry, material);
        this.sceneManager.sceneGraph.add(debugLines);
      }
}