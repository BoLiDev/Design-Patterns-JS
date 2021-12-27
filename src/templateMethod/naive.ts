class Monster {

  defaultDamage: number = 50;

  attack() {
    if (this.readStatus()) {
      const atk = this.readStats() / 4;
      return this.getText(atk);
    } else {
      return this.getText(this.defaultDamage);
    }
  }

  readStats() {
    return 100
  }

  readStatus() {
    return false;
  }

  getText(damage: number) {
    return `Monster dealt ${damage} damage`;
  }
}

class Human {

  defaultDamage: number = 35;

  attack() {
    if (this.readStatus()) {
      const atk = this.readStats() / 4;
      return this.getText(atk);
    } else {
      return this.getText(this.defaultDamage);
    }
  }

  readStats() {
    return 70
  }

  readStatus() {
    return false;
  }

  getText(damage: number) {
    return `Human dealt ${damage} damage`;
  }
}

class Elf {
  defaultDamage: number = 20;

  attack() {
    if (this.readStatus()) {
      const atk = this.readStats() / 4;
      return this.getText(atk);
    } else {
      return this.getText(this.defaultDamage);
    }
  }

  readStats() {
    return 40
  }

  readStatus() {
    return false;
  }

  getText(damage: number) {
    return `Elf dealt ${damage} damage`;
  }
}