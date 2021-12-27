/**
 * 1. 流程可变 ==> tedious and monstrous constructor
 * 2. 具体步骤实现可变
 */

enum material {
  steel = 'steel',
  stone = 'stone',
  wood = 'wood',
}


type Config = {
  avaiable: boolean;
  material: material;
}

type HouseConifg = {
  window: Config;
  floor: Config;
  gate: Config;
  wall: Config;
}

class HousePart {
  material: material;
  name: string;
  constructor(name:string, material: material) {
    this.name = name;
    this.material = material;
  }
}


export default class House {

  window: HousePart = null;
  floor: HousePart = null;
  gate: HousePart = null; 
  wall: HousePart = null;

  constructor(config: HouseConifg) {
    const { window, floor, gate, wall } = config;
    if (window.avaiable) {
      this.buildWindow(window.material);
    } else if (floor.avaiable) {
      this.buildWindow(floor.material);
    } else if (gate.avaiable) {
      this.buildWindow(gate.material);
    } else if (wall.avaiable) {
      this.buildWindow(wall.material);
    }
  }

  buildWindow(material) {
    console.log('Building the window....');
    this.window = new HousePart('window', material);
  }

  buildFloor(material) {
    console.log('Building the floor....');
    this.floor = new HousePart('floor', material);
  }

  buildGate(material) {
    console.log('Building the gate....');
    this.gate = new HousePart('gate', material);
  }

  buildWall(material) {
    console.log('Building the wall....');
    this.wall = new HousePart('wall', material);
  }
}