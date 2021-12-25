class Insurance {
  notify(car: Car) {
    console.log(`insurance noticed wether the car is still functional: ${car.functional}`);
  };
}

class Bank {
  notify(car: Car) {
    console.log(`bank noticed wether the car is still functional: ${car.functional}`);
  };
}

export default class Car {

  insurance: Insurance;
  bank: Bank;
  functional: boolean;

  constructor(insurance: Insurance, bank: Bank) {
    this.insurance = insurance;
    this.bank = bank;
    this.functional = true;
  }

  broke() {
    this.functional = false;
    this.bank.notify(this);
    this.insurance.notify(this);
  }
}

const insuranceInc = new Insurance();
const bank = new Bank();
const myCar = new Car(insuranceInc, bank);
myCar.broke();
