# ToDo

## Links

- https://github.com/mrdoob/three.js 
- https://waelyasmina.net
- https://sbcode.net/threejs
- https://heightmap.skydark.pl/
- https://3d-mapper.com
- https://manticorp.github.io/unrealheightmap
- https://imgur.com/a/dusty-biome-heightmap-big-shoulder-games-Br6plqE
- https://github.com/pmndrs/react-three-rapier/blob/main/packages/react-three-rapier/src/components/InstancedRigidBodies.tsx
- https://github.com/bobbyroe/Simple-Particle-Effects

# Veiculos

## Parametros diferentes entre veiculos
- movement
- options
- cores

# RAPIER
## IntegrationParameters
-  define como o passo de simulação da física é executado
- afinas o equilíbrio precisão × performance da tua física mexendo nesses parâmetros

| Campo (mais usados) | Função prática | 
| --- | --- |
dt | Duração de cada passo da física (timestep) — define o “FPS” interno do mundo.
maxVelocityIterations / maxPositionIterations | Número de iterações do solver para corrigir velocidades e posições; valores maiores ⇒ contactos mais estáveis, mas mais custo de CPU.
maxStabilizationIterations | Iterações extra quando usas CCD (sub-passos contra túneis).
allowedLinearError / allowedAngularError | Tolerância antes de tentar corrigir penetrações ou erros angulares.
erp / jointErp | “Error-Reduction Parameter” — percentagem do erro de penetração ou de juntas corrigida em cada passo.
warmstartCoeff | Quanto da solução do passo anterior é reutilizada (acelera convergência).

exemplo de ajustes:
- Mundo lento ou instável ➜ aumenta dt ou reduz iterações.
- Penetrações a alta velocidade ➜ diminui dt, aumenta maxVelocityIterations ou activa CCD.
- Sacadinhos/jitter em objetos empilhados ➜ aumenta erp e iterações.

exemplo - mundo a 120 Hz com solver mais preciso:
```js
import * as RAPIER from '@dimforge/rapier3d';

// 1. Cria parâmetros personalizados
const params = new RAPIER.IntegrationParameters();
params.dt                     = 1 / 120;  // 120 FPS internos
params.maxVelocityIterations  = 8;        // padrão = 4
params.maxPositionIterations  = 3;        // padrão = 1
params.allowedLinearError     = 0.002;    // mais preciso
params.erp                    = 0.8;      // correcção de penetração mais agressiva

// 2. Cria o mundo de física usando esses parâmetros
const gravity = new RAPIER.Vector3(0, -9.81, 0);
const world   = new RAPIER.World(gravity, params);

// 3. Loop de jogo (three.js, etc.)
function tick(dtRender) {
  // avança a física em passos FIXOS de 1/120
  world.step();
  // … sincroniza malhas e renderiza …
}
```
exemplo - sincronizar a física ao clock.getDelta() do Three.js:
- timestep variável (correspondendo à duração real de cada frame), basta actualizar o parâmetro dt ou a propriedade world.timestep antes de chamar step()
- Observação: timesteps variáveis podem introduzir ligeiras diferenças na estabilidade da simulação; usa-os apenas se precisares de sincronização perfeita com a taxa de refrescamento do monitor. Caso contrário, mantém um dt fixo e acumula o tempo até perfazer um passo.
```js
const clock = new THREE.Clock();

function animate() {
  const delta = clock.getDelta();   // segundos desde a última frame
  world.timestep = delta;           // usa esse delta nesta iteração
  world.step();

  // …actualiza posições e renderiza…
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
```

# RAPIER + THREE.js
- Adicionar grupos diferentes para por exemplo o carro e o chão
- Rodas - 2 juntas revolute por roda
- Suspensão - prismatic joint + mola  ou  adopta o helper DynamicRayCastVehicleController que já calcula suspensão por ray-cast e por mais rigida por causa do peso do carro
- Fricção do pneu - 	Deve ser anisotrópica—alta na frente-trás, baixa lateralmente (para drift controlado). setFriction(µ_long) + aplica força lateral manual addForce() para cancelar “skate”
- Superfície da estrada - aplicar tambem fricção , pode ter varios grupos com friccoes diferentes (ex: asfalto, terra, lama, etc.)
- Motor / travão - aplicar torques nas rodas (setMotorTorque() ou addTorqueImpulse()) e aplicar força de travão (setBrakeTorque())
### Organização de nós
- **userData** para ligar Mesh ↔ RigidBody
```js
// depois de criares o RigidBody
carMesh.userData.physics = carBody;   // referência cruzada
wheelMesh.userData.physics = wheelBody;

const body = carMesh.userData.physics;   // RAPIER.RigidBody
```
- “índice” dos nós após carregares o GLTF
```js
function indexMeshes(root) {
  const map = {};                        // { nome -> Mesh/Object3D }
  root.traverse(obj => {
    if (obj.name) map[obj.name] = obj;
  });
  return map;
}

const carGroup   = gltf.scene.getObjectByName('sedan-sports');
const carParts   = indexMeshes(carGroup);

console.log(carParts['wheel-back-left']);  // obténs directamente o Mesh
```
- Guardar tudo numa classe/estrutura
```js
class CarVisual {
  constructor(gltf) {
    this.group = gltf.scene.getObjectByName('sedan-sports');
    this.parts = indexMeshes(this.group);
  }
  get wheels() {
    return [
      this.parts['wheel-back-left'],
      this.parts['wheel-back-right'],
      this.parts['wheel-front-left'],
      this.parts['wheel-front-right'],
    ];
  }
}
```
# Apresentação

- uso de uma textura para o background e environment da scene - usado apenas como iluminacao e para no futuro em superfícies refletivas como vidro e água

- no load de models, é feito o caching dos modelos para que não sejam carregados novamente

- usei raycaster para selecionar os veiculos a controlar apartir do click do rato : `raycaster.setFromCamera e raycaster.intersectObjects`

# ToDo

##
- adicionar colliders as estradas
- adicionar a posicao de respawn aos veiculos
- modificar o comando de reset dos veiculos para nao ser ativado por teclas
- adicionar um limite onde os veiculos vao antes de dar respawn (se forem abaixo de y = -10 por exemplo)
- adicionar objetos (pedras) - usar BatchedMesh?/InstancedMesh?
- arranjar a iluminacao
- efeito a disparar
- fazer UIManager
- talvez usar um modelo (usar https://threejs.org/editor/) para o carro so para exemplificar 


- arranjar as colisoes dos projeteis
- meter sombras no terrain
- usar LOD
- usar DefaultLoadingManager e/ou LoadingManager
- usar configureMotorPosition para as pontes
## Futuro
- modelos dos veiculos
- usar texturas e bump maps
- usar o nome das meshes (park) para identificar se os veiculos estao no estacionamento

- fazer um EventBus para sincronizar eventos entre os sistemas, por exemplo se o physicsManager detetou uma colisao, envia uma publicacao que depois é recebida pelos susbscritores como o renderer, que vai fazer a animação de explosao - usar tambem para o input dos movimentos do carro

- adicionar variaveis independentes para a fricção, etc. do chão, etc.

- usar modelos com animacoes 

- usar convexHull para os colliders dos modelos dos veiculos para depois poder adicionar colliders às rodas

## Debug
- usar data.gui com options para manipular em tempo real parametros (luz, camera, physics, etc.)
