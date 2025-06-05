import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import Stats from "stats.js";

//TODO
const gui = new GUI();
/* 
//debug
const debugOptions = {
  animate_log: true, // Encapsula animate_log em um objeto
};
const debugFolder = gui.addFolder("Debug");
debugFolder
  .add(rapierDebugRenderer.log_options, "colliders")
  .name("Rapier Colliders");
debugFolder
  .add(rapierDebugRenderer.log_options, "connCs_dirCs_axleCs_suspLen")
  .name("Rapier connCs,dirCs,axleCs,suspLen Log");
debugFolder.add(debugOptions, "animate_log").name("Animate Log");
//Physics
const physicsFolder = gui.addFolder("Physics");
physicsFolder.add(world.gravity, "x", -100.0, 100.0, 0.1);
physicsFolder.add(world.gravity, "y", -100.0, 100.0, 0.1);
physicsFolder.add(world.gravity, "z", -100.0, 100.0, 0.1);
//Car
const carFolder = gui.addFolder("Car - para afinar parametros do carro");
//Simulação
const sim = {
  autoStep: false,
  requestStep: false, // flag para um único passo
  timestep: 1 / 60, // valor inicial ≃ 0.016s
  step() {
    this.requestStep = true; // quando o user clica, marca um passo
  },
};
const simFolder = gui.addFolder("Simulação");
simFolder.add(sim, "autoStep").name("Auto-step");
simFolder.add(sim, "step").name("Step");
simFolder.add(world, "timestep", 0.001, 0.1, 0.001).name("Time Step (s)"); 
*/

/* 
if (IS_DEBUG) {
      this.stats = new Stats();
      this.stats.showPanel(0); // 0: FPS, 1: MS, 2: MB
      document.body.appendChild(this.stats.dom);
    } 
*/
