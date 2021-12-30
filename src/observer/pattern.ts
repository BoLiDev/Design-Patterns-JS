abstract class Subscriber {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract notify(context: unknown): void;
}

abstract class Publisher {

  subscribers: Set<Subscriber>;

  abstract subscribe(subscriber: Subscriber): void;
  

  abstract unsubscribe(subscriber: Subscriber): void;
}


class Insurance extends Subscriber{
  constructor() {
    super('insurance');
  }
  notify(car: Car) {
    console.log(`${this.name} noticed wether the car is still functional: ${car.functional}`);
  };
}

class Bank extends Subscriber{
  constructor() {
    super('bank');
  }
  notify(car: Car) {
    console.log(`${this.name} noticed wether the car is still functional: ${car.functional}`);
  };
}

export default class Car extends Publisher{

  functional: boolean;

  constructor() {
    super();
    this.subscribers = new Set();
    this.functional = true;
  }

  subscribe(company: Subscriber) {
    this.subscribers.add(company);
  }

  unsubscribe(company: Subscriber) {
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
myCar.subscribe(bank);
myCar.subscribe(insuranceInc);
myCar.broke();
