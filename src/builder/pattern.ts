enum material {
  steel = 'steel',
  stone = 'stone',
  wood = 'wood',
}

class HousePart {
  material: material;
  name: string;
  constructor(name:string, material: material) {
    this.name = name;
    this.material = material;
  }
}

abstract class House {
  window: HousePart = null;
  floor: HousePart = null;
  gate: HousePart = null; 
  wall: HousePart = null;
  print() {
    let text = 'House Information: ';
    text += this.window ? `${this.window.material} window; ` : '';
    text += this.floor ? `${this.floor.material} floor; ` : '';
    text += this.gate ? `${this.gate.material} gate; ` : '';
    text += this.wall ? `${this.wall.material} wall; ` : '';
    console.log(text);
  }
}

abstract class Builder {
  house: House;
  
  abstract buildWindow(): void

  abstract buildFloor(): void

  abstract buildGate(): void

  abstract buildWall(): void

  getResult = () => this.house;

}

class HouseDirector {
  builder: Builder;
  constructor(builder: Builder) {
    this.builder = builder;
  }

  build() {
    this.builder.buildGate();
    for (let i = 0; i < 4; i++) {
      this.builder.buildWall();
    }
    this.builder.buildFloor();
    for (let i = 0; i < 2; i++) {
      this.builder.buildWindow();
    }
    return this.builder.getResult();
  }

}

class StoneHouse extends House {
  
}

class StoneHouseBuilder extends Builder {

  constructor() {
    super();
    this.house = new StoneHouse();
  }

  buildWindow() {
    this.house.window = null;
  }

  buildFloor() {
    this.house.floor = new HousePart('floor', material.stone);

  }

  buildGate() {
    this.house.gate = new HousePart('gate', material.stone);
  }

  buildWall() {
    this.house.wall = new HousePart('wall', material.stone);
  }
}

class WoodHouse extends House {
  
}

class WoodHouseBuilder extends Builder {

  constructor() {
    super();
    this.house = new WoodHouse();
  }

  buildWindow() {
    this.house.window = new HousePart('window', material.wood);;
  }

  buildFloor() {
    this.house.floor = new HousePart('floor', material.wood);

  }

  buildGate() {
    this.house.gate = new HousePart('gate', material.wood);
  }

  buildWall() {
    this.house.wall = null;
  }
}

const stoneHouseBuilder = new StoneHouseBuilder();
const director = new HouseDirector(stoneHouseBuilder);
const stoneHouse = director.build();
stoneHouse.print();