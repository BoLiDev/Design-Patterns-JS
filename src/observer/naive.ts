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

/**
 * - 什么叫程序之间通信：程序 B 在程序 A 的特定状态改变时需要调用其对应的方法
 * ---- 程序 A **依赖** 程序 B （编译时依赖）
 * ---- 程序 B **注册** 程序 A （运行时依赖）
 */
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

