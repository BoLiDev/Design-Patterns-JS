export default abstract class AI {

  defaultDamage: number;

  constructor(defaultDamage: number) {
    this.defaultDamage = defaultDamage;
  }

  attack() {
    if (this.readStatus()) {
      const atk = this.readStats();
      return this.getText(atk);
    } else {
      return this.getText(this.defaultDamage);
    }
  }

  abstract readStats(): number;

  abstract readStatus(): boolean;

  abstract getText(damage: number): string;
}

class Monster extends AI {
  constructor() {
    super(50);
  }
  readStats() {
    return 100
  }

  readStatus() {
    return false;
  };

  getText(damage: number) {
    return `Monster dealt ${damage} damage`;
  };
}

class Human extends AI {
  constructor() {
    super(35);
  }
  readStats() {
    return 70
  }

  readStatus() {
    return false;
  };

  getText(damage: number) {
    return `Human dealt ${damage} damage`;
  };
}


class Elf extends AI {
  constructor() {
    super(20);
  }
  readStats() {
    return 40
  }

  readStatus() {
    return true;
  };

  getText(damage: number) {
    return `Elf dealt ${damage} damage`;
  };
}

class Client {
  fight(target: AI) {
    console.log(target.attack());
  }
}

const client = new Client()
client.fight(new Elf());