class SmartControl {
  constructor(fan, airConditioner) {
    this.fan = fan;
    this.airConditioner = airConditioner;
    this.on = false;
  }

  turnOn() {
    this.on = true;
    console.log("smartControl turned on!");
    if (!this.check()) {
      // let's assume AC has a higher prioirty
      this.fan.turnOff();
    }
  }

  turnOff() {
    this.on = false;
    console.log("smartControl turned off!");
  }

  check() {
    return !(this.on && this.fan.on && this.airConditioner.on);
  }
}

class Fan {
  constructor(smartControl, airConditioner) {
    this.smartControl = smartControl || null;
    this.airConditioner = airConditioner || null;
    this.on = false;
  }

  turnOn() {
    this.on = true;
    console.log("fan turned on!");
    if (!this.smartControl.check()) {
      this.airConditioner.turnOff();
    }
  }

  turnOff() {
    this.on = false;
    console.log("fan turned off!");
  }
}

class AirConditioner {
  constructor(smartControl, fan) {
    this.smartControl = smartControl || null;
    this.fan = fan || null;
    this.on = false;
  }

  turnOn() {
    console.log("ac turned on!");
    this.on = true;
    if (!this.smartControl.check()) {
      this.fan.turnOff();
    }
  }

  turnOff() {
    console.log("ac turned off!");
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

const ac = new AirConditioner();
const fan = new Fan();
ac.fan = fan;
fan.airConditioner = ac;
const smartControl = new SmartControl(fan, ac);
ac.smartControl = smartControl;
fan.smartControl = smartControl;

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
