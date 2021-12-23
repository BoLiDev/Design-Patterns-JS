class Company {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  notify(car: Car) {
    console.log(`${this.name} noticed wether the car is still functional: ${car.functional}`);
  };
}

class Insurance extends Company{
  constructor() {
    super('insurance');
  }
}

class Bank extends Company{
  constructor() {
    super('bank');
  }
}

class Car {

  subscribers: Set<Company>;
  functional: boolean;

  constructor() {
    this.subscribers = new Set();
    this.functional = true;
  }

  register(company: Company) {
    this.subscribers.add(company);
  }

  unregister(company: Company) {
    this.subscribers.delete(company);
  }

  broke() {
    this.functional = false;
    for (const subscriber of this.subscribers.values()) {
      subscriber.notify(this);
    } 
  }
}


const myCar = new Car();
const bank = new Bank();
const insuranceInc = new Insurance();
myCar.register(bank);
myCar.register(insuranceInc);
myCar.broke();
