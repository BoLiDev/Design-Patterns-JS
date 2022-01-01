/**
 * number of classes: 1 + n + m * n
 * Messenger 职责不单一，同时包含了业务代码和平台的底层支持代码
 */

export default abstract class Messenger {
  abstract login(username: string, password: string): void;
  abstract sendMessage(message: string): void;
  abstract sendPicture(url: string): void;

  abstract playSound(): void;
  abstract drawShape(): void;
  abstract writeText(): void;
  abstract connect(): void;
}

abstract class PCMessenger extends Messenger {

  playSound() {
    console.log('Windows playing sound...');
  };
  drawShape() {
    console.log('Windows drawing shape...');
  };
  writeText() {
    console.log('Windows writing text...');
  };
  connect() {
    console.log('Windows connecting...');
  };
}

abstract class MobileMessenger extends Messenger {

  playSound() {
    console.log('Mobile playing sound...');
  };
  drawShape() {
    console.log('Mobile drawing shape...');
  };
  writeText() {
    console.log('Mobile writing text...');
  };
  connect() {
    console.log('Mobile connecting...');
  };
}

/**
 * PCMessengerLite 只是想引用 PCMessenger 的方法，并不是继承
 */
class PCMessengerLite extends PCMessenger {

  login(username: string, password: string) {
    this.connect();
    console.log(`ClientLite is loging user: ${username}`);
  }
  sendMessage(message: string) {
    this.writeText();
    console.log(`ClientLite is writing text: ${message}`);
  }
  sendPicture(url: string) {
    this.drawShape();
    console.log(`ClientLite is drawing shape: ${url}`);
  }
}

class PCMessengerPerfect extends PCMessenger {

  login(username: string, password: string) {
    this.connect();
    console.log(`ClientPerfect is loging user: ${username}`);
  }
  sendMessage(message: string) {
    this.writeText();
    console.log(`ClientPerfect is writing text: ${message}`);
  }
  sendPicture(url: string) {
    this.drawShape();
    console.log(`ClientPerfect is drawing shape: ${url}`);
  }
}

class MobileMessengerLite extends MobileMessenger {

  login(username: string, password: string) {
    this.connect();
    console.log(`ClientLite is loging user: ${username}`);
  }
  sendMessage(message: string) {
    this.writeText();
    console.log(`ClientLite is writing text: ${message}`);
  }
  sendPicture(url: string) {
    this.drawShape();
    console.log(`ClientLite is drawing shape: ${url}`);
  }
}

class MobileMessengerPerfect extends MobileMessenger {

  login(username: string, password: string) {
    this.connect();
    console.log(`ClientPerfect is loging user: ${username}`);
  }
  sendMessage(message: string) {
    this.writeText();
    console.log(`ClientPerfect is writing text: ${message}`);
  }
  sendPicture(url: string) {
    this.drawShape();
    console.log(`ClientPerfect is drawing shape: ${url}`);
  }
}

const clientA = new MobileMessengerPerfect();
clientA.login('boli', '123');