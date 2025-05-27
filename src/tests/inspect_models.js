import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const modelPath =
  import.meta.env.BASE_URL +
  "models/pack_de_ruas_by_lw3d_mods_e_edits/scene.gltf";

// Configuração inicial
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 4);
const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luz ambiente mais forte
scene.add(new THREE.AmbientLight(0xffffff, 0.5));// intensidade 0.5
// Luz direcional com sombras
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 10, 10);
light.castShadow = true;
scene.add(light);
// Luz hemisférica
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);
// Luz pontual
const pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
pointLight.position.set(5, 10, 5);
scene.add(pointLight);
// Ativar sombras no renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new OrbitControls(camera, renderer.domElement);

function createCheckerboardTexture(size = 512, squares = 16) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const squareSize = size / squares;
  for (let y = 0; y < squares; y++) {
    for (let x = 0; x < squares; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? "#fff" : "#000";
      ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
    }
  }
  return new THREE.CanvasTexture(canvas);
}
const gridSize = 200; // tamanho total do chão
const gridDivisions = gridSize; // 1 unidade por quadrado
const groundGeometry = new THREE.PlaneGeometry(gridSize, gridSize);
const groundMaterial = new THREE.MeshPhongMaterial({
  map: createCheckerboardTexture(1024, gridDivisions),
  side: THREE.DoubleSide,
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.01; // ligeiramente abaixo do zero para evitar z-fighting
ground.receiveShadow = true;
scene.add(ground);

const meshes = [];
await new GLTFLoader().loadAsync(`${modelPath}`).then((gltf) => {
  let xOffset = 0;
  let yOffset = 0.2;
  let zOffset = 0;
  console.log("Objetos disponíveis no modelo:");
  gltf.scene.traverse((obj) => {
    if (obj.isMesh) {
      const meshClone = obj.clone();
      meshClone.position.set(xOffset, yOffset, zOffset);
      meshClone.rotation.x = Math.PI/2;
      scene.add(meshClone);
      meshes.push(meshClone);

      // Cria um canvas para o texto
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.font = "24px Arial";
      const text = obj.name || "SemNome";
      const textWidth = ctx.measureText(text).width;
      canvas.width = textWidth + 20;
      canvas.height = 40;
      ctx.font = "24px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(text, 10, 30);

      // Cria uma textura a partir do canvas
      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
      });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(canvas.width / 50, canvas.height / 50, 1);
      sprite.position.set(xOffset, yOffset + 1.5, zOffset); // 1.5 unidades acima da mesh
      scene.add(sprite);

      //yOffset += 10; // Empilha as meshes no eixo Y
      if (xOffset >= 100){
        xOffset = 0; // Reseta o deslocamento no eixo X
        zOffset += 10; // Incrementa o deslocamento no eixo Z
      }else{
        xOffset += 10; // Incrementa o deslocamento no eixo X
      }
    }
    if (obj.isMesh || obj.isGroup) {
      console.log(`- Nome: ${obj.name}, Tipo: ${obj.type}`);
    }
  });
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Loop de animação
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
