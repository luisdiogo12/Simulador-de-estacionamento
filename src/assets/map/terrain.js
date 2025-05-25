//TODO
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";

import { IS_DEBUG } from "debugManager";

//TODO mudar o nome disto para ground, mudar tambem no vite.config.js
let terrain = null;
let terrain2 = null;

const terrainWidth = 1000;
const terrainHeight = 1000;
const terrainWidthSegments = 10;
const terrainHeightSegments = 10;
const coliderThickness = 0.01;

function createTerrain(world, sceneManager) {
  if (terrain) {
    console.warn("O terreno já foi criado.");
    return terrain; // Retorna o terreno existente
  }
  const terrainMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(
      terrainWidth,
      terrainHeight,
      terrainWidthSegments,
      terrainHeightSegments
    ),
    new THREE.MeshPhongMaterial({
      color: 0x00c000,
      //side: THREE.DoubleSide,
      wireframe: false,
      transparent: false,
    })
  );
  terrainMesh.name = "terrain";
  terrainMesh.rotation.x = -Math.PI / 2;
  terrainMesh.position.y = 0;
  terrainMesh.receiveShadow = true;
  const terrainBodyDesc = RAPIER.RigidBodyDesc.fixed();
  terrainBodyDesc.setTranslation(...terrainMesh.position.toArray());
  const terrainBody = world.createRigidBody(terrainBodyDesc);
  terrainBody.userData = { name: "terrain" };
  const terrainColliderDesc = RAPIER.ColliderDesc.cuboid(
    terrainWidth / 2,
    coliderThickness,
    terrainHeight / 2
  ).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
  const terrainCollider = world.createCollider(
    terrainColliderDesc,
    terrainBody
  );
  terrainMesh.userData.physicsBody = terrainBody;
  terrainMesh.userData.collisions = new Set(); // para em cada objeto saber com quem colidiu

  terrain = terrainMesh;
  return terrain;
}

const heightsPath = import.meta.env.BASE_URL + "heightMaps";
const h0 = "/Hand_made_terrain_heightmap.png";
const h1 = "/t0.jpg";
const h2 = "/t1.jpg";
const h = h1;

async function createTerrain2(world, sceneManager) {
  console.log("Terrain2");
  if (terrain2) {
    console.warn("O terreno já foi criado.");
    return terrain2; // Retorna o terreno existente
  }
  const tGeo = new THREE.PlaneGeometry(terrainWidth, terrainHeight, 256, 256);
  const disMap = await new THREE.TextureLoader().loadAsync(heightsPath + h);
  disMap.wrapS = THREE.RepeatWrapping;
  //disMap.wrapT = THREE.RepeatWrapping;
  disMap.repeat.set(terrainWidth, terrainHeight);
  //disMap.anisotropy = 16;
  const tMat = new THREE.MeshPhongMaterial({
    color: 0x00c000,
    //side: THREE.DoubleSide,
    wireframe: true,
    transparent: false,
    displacementMap: disMap,
    displacementScale: 1000,
  });
  terrain2 = new THREE.Mesh(tGeo, tMat);
  terrain2.name = "terrain2";
  terrain2.rotation.x = -Math.PI / 2;
  terrain2.position.y = 0;

  console.log("criado");
  return terrain2;
}

async function createTerrain3(world, sceneManager) {
  console.log("Terrain3");
  try {
    const width = 1000; // dimensão X do terreno real em unidades
    const depth = 1000; // dimensão Z do terreno real
    const segments = 100; // subdivisões do plano
    const maxHeight = 70; // altura máxima (escala do deslocamento)
    console.log("heightsPath", heightsPath);
    const texture = await new THREE.TextureLoader().loadAsync(heightsPath + h);
    const img = texture.image;
    console.log("img", img);
    // extrai dados de altura
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, img.width, img.height).data;
    // cria geometria e desloca vértices
    const geo = new THREE.PlaneGeometry(width, depth, segments, segments);
    geo.rotateX(-Math.PI / 2); // torna-o horizontal
    // 4) Para cada vértice, ajusta a posição y conforme o pixel
    const pos = geo.attributes.position;
    const uvAttr = geo.attributes.uv;
    // prepara array para cores (r,g,b)
    const colors = new Float32Array(pos.count * 3);

    for (let i = 0; i < pos.count; i++) {
      // calcula heightValue de 0 a 1 : uv vai de [0,1], mapeia para coord do pixel
      const u = uvAttr.getX(i);
      const v = uvAttr.getY(i);
      const px = Math.floor(u * (img.width - 1));
      const py = Math.floor((1 - v) * (img.height - 1));
      const idx = (py * img.width + px) * 4;
      // a componente R (0–255) basta para o heightmap em cinzentos
      const hVal = imgData[idx] / 255;
      pos.setY(i, hVal * maxHeight);
      // escolhe cor: verde-baixo, castanho-médio, branco-alto
      const color = new THREE.Color();
      if (hVal < 0.3) {
        // gradação verde: profundidade <0.3
        color.setRGB(0, 0.5 + 0.5 * (hVal / 0.3), 0);
      } else if (hVal < 0.6) {
        // gradação castanho-médio
        const t = (hVal - 0.3) / 0.3;
        color.lerpColors(
          new THREE.Color(0.1, 0.05, 0), // castanho escuro
          new THREE.Color(0.4, 0.3, 0.1), // castanho claro
          t
        );
      } else {
        // gradação branco: montanhas
        const t = (hVal - 0.6) / 0.4;
        color.lerpColors(
          new THREE.Color(0.8, 0.8, 0.8),
          new THREE.Color(1, 1, 1),
          t
        );
      }

      // armazena no array
      colors[i * 3 + 0] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    geo.computeVertexNormals();
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // 5) Material e mesh
    const mat = new THREE.MeshPhongMaterial({
      vertexColors: true,
      flatShading: false,
      wireframe: false,
      shininess: 30,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    mesh.position.set(-300, -20, -100);
    return mesh;
  } catch (error) {
    console.error("Erro ao carregar a textura:", error);
    console.log("Caminho completo para a textura:", heightsPath + h);
  }
}
import { Water } from "three/addons/objects/Water2.js";
const texturesPath = import.meta.env.BASE_URL + "textures";
const wT = "/Water_1_M_Flow.jpg";
async function createWater(world, sceneManager) {
  const waterGeometry = new THREE.PlaneGeometry(20, 20, 200, 200);
  try {
    const flowMap = await new THREE.TextureLoader().loadAsync(
      texturesPath + wT
    );
    const water = new Water(waterGeometry, {
      //color: 0x001e0f, // cor base da água
      scale: 4, // escala de repetição dos normal maps
      textureWidth: 1024,
      textureHeight: 1024,
      flowMap: flowMap,
      //flowDirection: new THREE.Vector2(1, 0), // direção do fluxo, se não usares flowMap
      //flowSpeed: 0.03, // velocidade de avanço do flow map
      //reflectivity: 0.05, // intensidade das reflexões
      //clipBias: 0.01, // evita artefactos de clipping
    });

    water.position.y = 3;
    water.position.x = 15;
    water.rotation.x = Math.PI * -0.5;

    return water;
  } catch (error) {
    console.error("Erro ao carregar a textura:", error);
    console.log("Caminho completo para a textura:", texturesPath + wT);
  }
}
export { terrain, createTerrain, createTerrain2, createTerrain3, createWater };
