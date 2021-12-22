class SmartControl {
  constructor() {
    this.on = false;
    this.coolers = [];
  }

  turnOn() {
    this.on = true;
    console.log("smartControl turned on!");
    this.mediate();
  }

  turnOff() {
    this.off = false;
    console.log("smartControl turned off!");
  }

  register(cooler, priority) {
    this.coolers.push({ cooler, priority });
    cooler.controller = this;
  }
  mediate(target) {
    if (!this.on) return;
    if (!target) {
      //broadcast
      this.coolers.sort((a, b) => b.priority - a.priority);
      for (let i = 1; i < this.coolers.length; i++) {
        const { cooler } = this.coolers[i];
        cooler.on && cooler.turnOff();
      }
      return;
    }
    this.coolers.forEach(({ cooler }) => {
      cooler !== target && cooler.on && cooler.turnOff();
    });
  }
}

class Cooler {
  constructor(name) {
    this.on = false;
    this.controller = null;
    this.name = name;
  }
  turnOn() {
    this.on = true;
    console.log(`${this.name} turned on!`);
    this.controller.mediate(this);
  }
  turnOff() {
    console.log(`${this.name} turned off!`);
    this.on = false;
  }
}

class Printer {
  constructor(smartControl, airConditioner, fan) {
    this.smartControl = smartControl;
    this.airConditioner = airConditioner;
    this.fan = fan;
  }

  print(smartSystem, ac, fan) {
    console.log(
      `smartControl: ${this.smartControl.on ? "on" : "off"}, ac: ${
        this.airConditioner.on ? "on" : "off"
      }, fan: ${this.fan.on ? "on" : "off"}`
    );
  }
}

const smartControl = new SmartControl();
const ac = new Cooler("ac");
const fan = new Cooler("fan");
smartControl.register(ac, 2);
smartControl.register(fan, 1);

const printer = new Printer(smartControl, ac, fan);
const print = printer.print.bind(printer);

print();
ac.turnOn();
print();
fan.turnOn();
print();
smartControl.turnOn();
print();
fan.turnOn();
print();
