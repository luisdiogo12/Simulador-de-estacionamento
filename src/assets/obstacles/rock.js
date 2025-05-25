//TODO 
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { pm } from "gameManager";
const world = pm.world;

import { IS_DEBUG } from "debugManager";

export class Car {
  rapierDebugRender;
  scene;
  options;
  chassisMesh;
  chassisBody;
  chassisCollider;
  controller;
  wheels;
  movement;
  constructor( scene, options = {}, rapierDebugRender) {
    if (IS_DEBUG && !rapierDebugRender) {
      console.warn("rapierDebugRender não foi passado para a classe Car.");
    }
    this.rapierDebugRender = rapierDebugRender;
    this.movement = {
      forward: 0,
      right: 0,
      brake: 0,
      reset: false,
      accelerateForce: { value: 0, min: -30, max: 30, step: 1 },
      brakeForce: { value: 0, min: 0, max: 1, step: 0.05 },
    };
    this.scene = scene;
    this.options = {
      chassisSize: new THREE.Vector3(2, 1, 4),
      wheelRadius: 0.3,
      wheelWidth: 0.4,
      ...options,
    };

    this.initChassis();
    this.initWheels();
    if (IS_DEBUG && this.rapierDebugRender) {
      this.rapierDebugRender.addVehicle(this.chassisBody, this.controller);
    } else if (IS_DEBUG) {
      console.warn("rapierDebugRender não está inicializado.");
    }
  }

  update() {
    
  }
}
