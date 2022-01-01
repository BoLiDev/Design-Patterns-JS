/**
 * number of classes: 1 + n + m 
 * Messenger 负责具体的业务实现
 * MessengerPlatform 负责具体平台的接口实现
 * 二者组合完成任务
 */

abstract class Messenger {
  abstract login(username: string, password: string): void;
  abstract sendMessage(message: string): void;
  abstract sendPicture(url: string): void;

 }

abstract class MessengerPlatform {
  abstract playSound(): void;
  abstract drawShape(): void;
  abstract writeText(): void;
  abstract connect(): void;
 }

class PCMessengerPlatform extends MessengerPlatform {

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

class MobileMessengerPlatform extends MessengerPlatform {

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

class MessengerLite extends Messenger{

  platform: MessengerPlatform;
  constructor(platform: MessengerPlatform) {
    super();
    this.platform = platform;
  }

  login(username: string, password: string) {
    this.platform.connect();
    console.log(`ClientLite is loging user: ${username}`);
  }
  sendMessage(message: string) {
    this.platform.writeText();
    console.log(`ClientLite is writing text: ${message}`);
  }
  sendPicture(url: string) {
    this.platform.drawShape();
    console.log(`ClientLite is drawing shape: ${url}`);
  }
}

class MessengerPerfect  extends Messenger{

  platform: MessengerPlatform;
  constructor(platform: MessengerPlatform) {
    super();
    this.platform = platform;
  }

  login(username: string, password: string) {
    this.platform.connect();
    console.log(`ClientPerfect is loging user: ${username}`);
  }
  sendMessage(message: string) {
    this.platform.writeText();
    console.log(`ClientPerfect is writing text: ${message}`);
  }
  sendPicture(url: string) {
    this.platform.drawShape();
    console.log(`ClientPerfect is drawing shape: ${url}`);
  }
}


const platform = new PCMessengerPlatform();
const clientA = new MessengerLite(platform);
clientA.login('boli', '123');