
import * as THREE from "three";
import { Water } from "three/addons/objects/Water2.js";
const texturesPath = import.meta.env.BASE_URL + "textures";
const wT = "/Water_1_M_Flow.jpg";

const heightsPath = import.meta.env.BASE_URL + "heightMaps";
const hT = "/gen_c4.png";

const waterWidth = 1500;
const waterHeight = 1500;
const waterWidthSegments = 50;
const waterHeightSegments = 50;


export async function createWater(world, sceneManager) {
  const waterGeometry = new THREE.PlaneGeometry(
    waterWidth,
    waterHeight,
    waterWidthSegments,
    waterHeightSegments
  );
  try {
    const flowMap = await new THREE.TextureLoader().loadAsync(
      texturesPath + wT
    );
    const water = new Water(waterGeometry, {
      color: 0xffffff, // cor base da água
      //transparent: true, // permite transparência
      scale: 4, // escala de repetição dos normal maps
      textureWidth: 1024,
      textureHeight: 1024,
      //flowMap: flowMap,
      flowDirection: new THREE.Vector2(1, 0), // direção do fluxo, se não usares flowMap
      flowSpeed: 0.5, // velocidade de avanço do flow map
      //reflectivity: 0.05, // intensidade das reflexões
      //clipBias: 0.01, // evita artefactos de clipping
    });

    water.position.y = -12;
    water.position.x = 0;
    water.rotation.x = Math.PI * -0.5;

    return water;
  } catch (error) {
    console.error("Erro ao carregar a textura:", error);
    console.log("Caminho completo para a textura:", texturesPath + wT);
  }
}
