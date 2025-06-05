//TODO
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";

import { IS_DEBUG } from "debugManager";

let terrainWidth;
let terrainHeight;
let terrainWidthSegments;
let terrainHeightSegments;
let maxHeight;
let coliderThickness;
let groundColliders = true;
if (groundColliders){
  terrainWidth = 1500;
  terrainHeight = 1500;
  terrainWidthSegments = 100;
  terrainHeightSegments = 100;
  maxHeight = 150; // altura máxima (escala do deslocamento)
  coliderThickness = 0.01;
}else {
   terrainWidth = 1500;
   terrainHeight = 1500;
   terrainWidthSegments = 200;
   terrainHeightSegments = 200;
   maxHeight = 150; // altura máxima (escala do deslocamento)
   coliderThickness = 0.01;
}


const heightsPath = import.meta.env.BASE_URL + "heightMaps";
const h0 = "/gen_c4.png";
const h12 = "/t0.jpg";
const h1 = "/Hand_made_terrain_heightmap.png";
const h2 = "/t1.jpg";
const h3 = "/dIf3nPq.jpeg";
const h4 = "/46_294_-85_748_9_505_520.png";
const h5 = "/ZjOyoNP.png";
const h6 = "/generated_h.png";
const h7 = "/criado.png";
const h8 = "/generated2.png";
const h9 = "/generated3.png";
const h10 = "/gen_c.png";
const h11 = "/gen_c3.png";
const h13 = "/test.png";
const h = h0;
const usePositive = true;
function normalize(v, vmin, vmax) {
  const noise = (Math.random() - 0.5) * 0.1; // -0.05 a 0.05
  return (v - vmin) / (vmax - vmin) + noise;
}
function getColor(color, lvalues, lcolors, hVal, x) {
  color.lerpColors(
    lcolors[x - 1][0],
    lcolors[x - 1][1],
    normalize(hVal, lvalues[x - 1], lvalues[x]) // t
  );
}
export async function createTerrain(physicsManager, sceneManager) {
  console.log("Terrain");
  try {
    console.log("heightsPath", heightsPath);
    const texture = await new THREE.TextureLoader().loadAsync(heightsPath + h);
    const img = texture.image;
    console.log("img", img);

    // 1) desenha a imagem em canvas para extrair imgData
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, img.width, img.height).data;

    // 2) monta heightData com dimensões widthSegments x heightSegments
    //    (mesmo padrão do demo: Float32Array de tamanho widthSegments * heightSegments).
    //    aqui assumimos que img.width == terrainWidthSegments e
    //    img.height == terrainHeightSegments, ou que vamos amostrar a imagem
    //    para obter exatamente esse número de pontos.
    const wSamples = terrainWidthSegments;
    const hSamples = terrainHeightSegments;
    const heightData = new Float32Array(wSamples * hSamples);

    const rotationAngle = -Math.PI / 2; // 45 graus
    const cosTheta = Math.cos(rotationAngle);
    const sinTheta = Math.sin(rotationAngle);
    const centerX = (wSamples - 1) / 2;
    const centerZ = (hSamples - 1) / 2;

    for (let j = 0; j < hSamples; j++) {
      for (let i = 0; i < wSamples; i++) {
        const x = i - centerX;
        const z = j - centerZ;
        const rotatedX = x * cosTheta - z * sinTheta;
        const rotatedZ = x * sinTheta + z * cosTheta;

        /* const px = Math.floor((i / (wSamples - 1)) * (img.width - 1));
        const py = Math.floor(
          ((hSamples - 1 - j) / (hSamples - 1)) * (img.height - 1)
        ); */
        const px = Math.floor(
          ((rotatedX + centerX) / (wSamples - 1)) * (img.width - 1)
        );
        const py = Math.floor(
          ((centerZ - rotatedZ) / (hSamples - 1)) * (img.height - 1)
        );
        const idx = (py * img.width + px) * 4;
        // usa componente R como heightmap em tons de cinza
        let hVal;
        if (usePositive) {
          hVal = imgData[idx] / 255; // 0 a 1
        } else {
          hVal = 1 - imgData[idx] / 255; // invertido
        }
        // escala para [0..maxHeight]
        const altura = hVal * maxHeight;
        heightData[j * wSamples + i] = altura;
      }
    }

    // 3) cria geometria e desloca vértices (igual ao seu original)
    const geo = new THREE.PlaneGeometry(
      terrainWidth,
      terrainHeight,
      terrainWidthSegments - 1,
      terrainHeightSegments - 1
    );
    geo.rotateX(-Math.PI / 2);

    const posAttr = geo.attributes.position;
    const uvAttr = geo.attributes.uv;
    const colors = new Float32Array(posAttr.count * 3);

    for (let vIndex = 0; vIndex < posAttr.count; vIndex++) {
      // calcula u,v para encontrar o pixel correspondente àquele vértice
      const u = uvAttr.getX(vIndex);
      const v = uvAttr.getY(vIndex);
      const px = Math.floor(u * (img.width - 1));
      const py = Math.floor((1 - v) * (img.height - 1));
      const idx = (py * img.width + px) * 4;
      let hVal;
      if (usePositive) {
        hVal = imgData[idx] / 255;
      } else {
        hVal = 1 - imgData[idx] / 255;
      }
      const y = hVal * maxHeight;
      posAttr.setY(vIndex, y);

      // cor por faixa (mesma lógica que você já tinha)
      const color = new THREE.Color();
      const lvalues = [0, 0.3, 0.4, 0.5, 0.8, 0.85, 1];
      const lcolors = [
        [new THREE.Color(0.34, 0.36, 0.22), new THREE.Color(0, 0.38, 0.18)],
        [new THREE.Color(0, 0.38, 0.18), new THREE.Color(0, 1, 0.2)],
        [new THREE.Color(0, 1, 0.2), new THREE.Color(0.1, 0.05, 0)],
        [new THREE.Color(0.1, 0.05, 0), new THREE.Color(0.4, 0.3, 0.1)],
        [new THREE.Color(0.4, 0.3, 0.1), new THREE.Color(0.8, 0.8, 0.8)],
        [new THREE.Color(0.8, 0.8, 0.8), new THREE.Color(1, 1, 1)],
      ];
      switch (true) {
        case hVal < lvalues[1]:
          getColor(color, lvalues, lcolors, hVal, 1);
          break;
        case hVal < lvalues[2]:
          getColor(color, lvalues, lcolors, hVal, 2);
          break;
        case hVal < lvalues[3]:
          getColor(color, lvalues, lcolors, hVal, 3);
          break;
        default:
          getColor(color, lvalues, lcolors, hVal, lvalues.length - 1);
          break;
      }
      colors[vIndex * 3 + 0] = color.r;
      colors[vIndex * 3 + 1] = color.g;
      colors[vIndex * 3 + 2] = color.b;
    }

    geo.computeVertexNormals();
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // 4) cria mesh e adiciona sombra, etc.
    const mat = new THREE.MeshPhongMaterial({
      vertexColors: true,
      flatShading: false,
      wireframe: false,
      shininess: 30,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = "terrain";
    mesh.receiveShadow = true;
    mesh.position.set(0, -46, 0);

    // 5) agora chame addHeightfield usando o heightData criada acima:
    //    note que o Rapier espera (mesh, widthSamples-1, depthSamples-1, data, { x: larguraNoMundo, y: 1, z: profundidadeNoMundo })

    if (groundColliders) {
      physicsManager.addHeightfield(
        mesh,
        wSamples - 1, // 200 − 1 = 199, igual ao demo
        hSamples - 1, // 200 − 1 = 199
        heightData, // Float32Array de tamanho 200*200
        { x: terrainWidth, y: 1.0, z: terrainHeight }
      );
    }

    return mesh;
  } catch (error) {
    console.error("Erro ao carregar a textura:", error);
    console.log("Caminho completo para a textura:", heightsPath + h);
  }
}