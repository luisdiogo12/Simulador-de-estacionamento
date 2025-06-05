/**
 * @description lida com os controlos dos veiculos
 */
import { eventBus } from "eventBus";
import * as THREE from "three";

import { IS_DEBUG } from "debugManager";

const resetMin = new THREE.Vector3(-400, -12, -400);
export class VehicleManager {
  vehicles;
  activeVehicleIndex;
  movement;
  activeVehicle;
  constructor() {
    this.vehicles = [];
    this.vehicleMeshes = [];
    this.activeVehicleIndex = 0;
    this._hasEmitted = false; //flag para evitar emitir o evento mais do que uma vez
  }

  async addVehicle(vehicle) {
    console.log("ADICIONADO VEICULO:", vehicle);
    this.vehicles.push(vehicle);
    this.vehicleMeshes.push(vehicle.chassisMesh);
    if (this.vehicles.length === 1) {
      this.setActiveVehicle(0);
    }
  }

  setActiveVehicle(index) {
    if (index < 0 || index >= this.vehicles.length) {
      console.error("Índice de veículo inválido");
      return;
    }
    this.activeVehicleIndex = index;
    this.activeVehicle = this.vehicles[this.activeVehicleIndex];
    this.movement = this.activeVehicle.movement; //pois cada veiculo pode ter o seu proprio tipo de movimento
    //TODO resto da logica de quando o veiculo é trocado
    const pos = this.activeVehicle.chassisMesh.position;
  }

  update(dt) {
    //atualizar o movimento do veiculo ativo
    if (this.activeVehicle) this.activeVehicle.updateController(this.movement);
    //atualizar os vários veiculos
    this.vehicles.forEach((v) => {
      if (
        v.chassisMesh.position.y < resetMin.y ||
        v.chassisMesh.position.x < resetMin.x ||
        v.chassisMesh.position.z < resetMin.z
      ) {
        v.movement.reset = true; // se o veiculo sair do mapa, reseta o movimento
        v.updateController(v.movement);
      }
      v.controller.updateVehicle(dt);
      v.updateWheels();
    });
    //TODO so checkAllParked se receber uma notificacao de que mais um carro foi estacionado
    if (!this._hasEmitted && this._checkAllParked()) {
      this._hasEmitted = true;
      eventBus.emit("allParked", { total: this.vehicles.length }); // publish the event
    }
  }
  _checkAllParked() {
    //TODO
    // verificar se em todos os veiculos está o status de estacionado
    return false;
  }

  dispose() {
    this.vehicles.forEach((v) => v.dispose());
    this.vehicles = [];
  }
}