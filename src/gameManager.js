import * as THREE from "three";
import { SceneManager } from "sceneManager";
import { PhysicsManager, frameRate } from "physicsManager";
import { MapManager } from "mapManager";
import { VehicleManager } from "vehicleManager";
import { assetsManager } from "assetsManager";
import { eventBus } from "eventBus";

import levelsData from "configs/levels.json";
import mapsData from "configs/maps.json";

import { IS_DEBUG } from "debugManager";
import {RapierDebugRenderer} from "rapierDebug";


export let mm, pm, sm, vm;

export class GameManager {
  constructor(levelsIDs = ["1"]) {
    this.levelsIDs = levelsIDs;
    this.currentLevel = null;
    this.currentLevelIndex = 0;
    // timing state
    this._lastTime = 0;
    this._accumulator = 0;
    this._fixedDt = 1 / frameRate; // 1/60
    this._rafId = null;
    //
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
  }

  async start() {
    await this._loadLevel(this.currentLevelIndex);
    // initialize timing
    this._lastTime = performance.now() / 1000;
    this._accumulator = 0;
    //
    this.setupEventListeners();
    // kick off the loop
    this._rafId = requestAnimationFrame(this._loop);
  }

  stop() {
    cancelAnimationFrame(this._rafId);
  }

  _loop = (nowMs) => {
    const now = nowMs / 1000; // seconds
    let frameTime = now - this._lastTime;
    this._lastTime = now;

    //+: clamp very long frames (e.g. background tabs)
    frameTime = Math.min(frameTime, 0.25);

    this._accumulator += frameTime;

    //+: run physics+vehicle updates in fixed 1/60 slices
    while (this._accumulator >= this._fixedDt) {
      pm.step(this._fixedDt); // physics step
      vm.update(this._fixedDt);
      this.currentLevel.rapierDebugRender;
      this._accumulator -= this._fixedDt;
    }
    //+: atualizar o target e depois a camara
    if (vm.activeVehicle) {
      sm.setFollowTarget(vm.activeVehicle.chassisMesh);
    }
    sm.updateCamera();
    //+: render exactly once per RAF frame
    sm.renderScene();

    //+: debug rendering - colliders
    if (this.currentLevel.rapierDebugRender)
      this.currentLevel.rapierDebugRender.update();

    //+: queue next frame
    this._rafId = requestAnimationFrame(this._loop);
  };
  async nextLevel() {
    this.currentLevelIndex++;
    if (this.currentLevelIndex >= this.levelsIDs.length) {
      console.log("FIM DE JOGO");
      return;
    }
    await this._loadLevel(this.currentLevelIndex);
  }

  async _loadLevel(i) {
    if (this.currentLevel) {
      this.currentLevel.dispose();
    }
    this.currentLevel = new LevelController(this.levelsIDs[i]);
    await this.currentLevel.init();
    sm = this.currentLevel.sm;
    pm = this.currentLevel.pm;
    mm = this.currentLevel.mm;
    vm = this.currentLevel.vm;
    vm = this.currentLevel.vm;

    //TODO melhorar a logia de passagem de nivel, com UIManager, etc
    if (this._off) {
      this._off(); // remove the previous listener
    }
    // subscribes to the event bus for level completion and load the next level
    //eventBus.on() returns an unsubscribe function. Calling this._off() later removes that listener.
    this._off = eventBus.on("objectiveComplete", () => this.nextLevel());

    //TODO load UI
    //FIXME remover esta simulacao de espera de carregamento
    console.log("Carregando mapa...");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Pausa de 10 segundos
  }
  setupEventListeners() {
    window.addEventListener("resize", () =>
      this.currentLevel.sm.onWindowResize()
    );

    document.addEventListener("keydown", (event) => {
      const mv = this.currentLevel.vm.movement;
      if (!mv) {
        console.error("movement not defined");
        return;
      }
      this.currentLevel.sm.enableFollow(); //+: assim que algum comando é detectado, ativa o follow da camera
      if ("forward" in mv) {
        if (event.key === "w" || event.key === "ArrowUp") {
          this.currentLevel.vm.movement.forward = -1;
          if (IS_DEBUG) {
            console.log("forward");
          }
        }
        if (event.key === "s" || event.key === "ArrowDown") {
          this.currentLevel.vm.movement.forward = 1;
          if (IS_DEBUG) {
            console.log("backward");
          }
        }
      }
      if ("right" in mv) {
        if (event.key === "a" || event.key === "ArrowLeft") {
          this.currentLevel.vm.movement.right = 1;
          if (IS_DEBUG) {
            console.log("left");
          }
        }
        if (event.key === "d" || event.key === "ArrowRight") {
          this.currentLevel.vm.movement.right = -1;
          if (IS_DEBUG) {
            console.log("right");
          }
        }
      }
      if ("reset" in mv && event.key === "r") {
        this.currentLevel.vm.movement.reset = true;
        if (IS_DEBUG) {
          console.log("reset");
        }
      }
      if ("brake" in mv && event.key === " ") {
        this.currentLevel.vm.movement.brake = 1;
        if (IS_DEBUG) {
          console.log("brake");
        }
      }
    });
    document.addEventListener("keyup", (event) => {
      const mv = this.currentLevel.vm.movement;
      if (!mv) {
        console.error("movement not defined");
        return;
      }
      this.currentLevel.sm.enableFollow(); //+: assim que algum comando é detectado, ativa o follow da camera
      if (
        "forward" in mv &&
        (event.key === "w" ||
          event.key === "s" ||
          event.key === "ArrowUp" ||
          event.key === "ArrowDown")
      ) {
        this.currentLevel.vm.movement.forward = 0;
        if (IS_DEBUG) {
          console.log("stop backward");
        }
      }
      if (
        "right" in mv &&
        (event.key === "a" ||
          event.key === "d" ||
          event.key === "ArrowLeft" ||
          event.key === "ArrowRight")
      ) {
        this.currentLevel.vm.movement.right = 0;
        if (IS_DEBUG) {
          console.log("stop left");
        }
      }
      if ("reset" in mv && event.key === "r") {
        this.currentLevel.vm.movement.reset = false;
        if (IS_DEBUG) {
          console.log("stop reset");
        }
      }
      if ("brake" in mv && event.key === " ") {
        this.currentLevel.vm.movement.brake = 0;
        if (IS_DEBUG) {
          console.log("stop brake");
        }
      }
    });
    const canvas = this.currentLevel.sm.renderer.domElement;
    canvas.addEventListener("pointerdown", this._onPointerDown);
  }

  /**
   *
   * @param {*} event
   * @description 
   * Detecta o clique do rato e seleciona o veículo correspondente.
   * 
   */
  _onPointerDown = (event) => {
    //+: Normaliza as coordenadas do rato para o NDC space [-1,+1]
    const rect = event.target.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    //+: Lança o raio desde a câmara
    this.raycaster.setFromCamera(this.pointer, sm.camera);

    //+: Intersecta só com os chassisMesh dos veículos
    const intersects = this.raycaster.intersectObjects(vm.vehicleMeshes, true);
    if (intersects.length > 0) {
      const hitMesh = intersects[0].object;

      //+: Encontra o índice do veículo cujo chassisMesh foi clicado
      const idx = vm.vehicleMeshes.findIndex((mesh) => {
        // se tiveres hierarquia, podes subir parentChain até chassisMesh:
        return mesh === hitMesh || mesh.children.includes(hitMesh);
      });
      if (idx !== -1) {
        vm.setActiveVehicle(idx);
        this.currentLevel.sm.enableFollow();
        console.log("Veículo selecionado:", idx);
      }
    }
  };
}
class LevelController {
  constructor(levelID) {
    this.levelID = levelID;
    this.sm = new SceneManager();
    this.pm = new PhysicsManager();
    this.mm = new MapManager(this.sm, this.pm);
    this.vm = new VehicleManager();
    assetsManager.updateLevel(this.pm, this.sm, this.vm);
    this.rapierDebugRender = new RapierDebugRenderer(
      this.sm,
      this.pm.world
    );
    this.conditions = {
      allParked: false,
      //NOTE adicionar mais depois
    };
    this._offFns = []; // to hold unsubscribe functions
  }

  async init() {
    const levelData = levelsData[this.levelID];
    const mapData = mapsData[levelData["mapID"]];
    const vehiclesSpawns = levelData["vehiclesSpawns"];
    console.log("vehiclesSpawns", vehiclesSpawns);
    const objectsSpawn = levelData["objectsSpawn"];
    console.log("levelData", levelData);
    //TODO fazer o mapManager lidar com isto
    await this.mm.load(mapData, vehiclesSpawns, objectsSpawn);

    /* const mod = await import(`../scenes/${this.levelID}.js`);
    await this.sm.init(mod);
    this.pm.init(this.sm.scene);
    await this.mm.init(mod.mapConfig, this.sm, this.pm);
    await this.vm.spawnPlayer(mod.playerConfig, this.pm, this.sm);
    this.sm.animate(); */
    //!: reimite o evento, para caso no futuro precise de mais eventos para que o nivel seja concluido
    this._offFns.push(
      eventBus.on("allParked", () => this._onCondition("allParked"))
    );
  }
  _onCondition(key) {
    this.conditions[key] = true;
    this._checkComplete();
  }
  _checkComplete() {
    // only if *all* flags are true…
    if (Object.values(this.conditions).every((v) => v === true)) {
      // emit the single “level done” event
      eventBus.emit("objectiveComplete", { level: this.levelName });
    }
  }

  dispose() {
    this._offFns.forEach((off) => off());
    this._offFns = [];
    this.sm.dispose();
    this.pm.dispose();
    this.mm.dispose();
    this.vm.dispose();
  }
}
