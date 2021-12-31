/**
 * 1 + n + m
 */

export default abstract class Stream {
  abstract read(): void;
  abstract write(): void;
}

//======= Implementation =========
class FileStream extends Stream {
  read() {
    console.log('FileStream reading');
  };

  write() {
    console.log('FIleStream writing');
  };
}

class NetworkStream extends Stream {
  read() {
    console.log('NetworkStream reading');
  };

  write() {
    console.log('NetworkStream writing');
  };
}

class MemoryStream extends Stream {
  read() {
    console.log('MemoryStream reading');
  };

  write() {
    console.log('MemoryStream writing');
  };
}

//===== Decoration / Extension =======
abstract class Decorator extends Stream {
  stream: Stream;
  constructor(stream: Stream) {
    super();
    this.stream = stream;
  }
}

class BufferedStream extends Decorator{

  stream: Stream;
  constructor(stream: Stream) {
    super(stream);
  }

  read() {
    console.log('Buffering...');
    this.stream.read();
  };

  write() {
    console.log('Buffering...');
    this.stream.write();
  };
}

class CryptoStream extends Decorator {

  constructor(stream: Stream) {
    super(stream);
  }

  read() {
    this.stream.read();
    console.log('Crypting...');
  };

  write() {
    this.stream.write();
    console.log('Crypting...');
  };
}

const streamA = new FileStream()
streamA.read();
const streamB = new BufferedStream(streamA);
streamB.write();
const streamC = new CryptoStream(streamB);
streamC.read();






