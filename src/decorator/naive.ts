/**
 * 1 + n + n * (m! / 2)
 * 职责划分不清晰 ==> 混淆了 实现（抽象到具体）与 拓展（基础功能到复杂功能）
 */

export default abstract class Stream {
  abstract read(): void;
  abstract write(): void;
}

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

class BufferedFileStream extends FileStream {
  read() {
    console.log('Buffering...');
    super.read();
  };

  write() {
    console.log('Buffering...');
    super.write();
  };
}

class CryptoFileStream extends FileStream {
  read() {
    super.read();
    console.log('Crypting...');
  };

  write() {
    super.write();
    console.log('Crypting...');
  };
}

class BufferedCryptoFileStream extends FileStream {
  read() {
    console.log('Buffering...');
    super.read();
    console.log('Crypting...');
  };

  write() {
    console.log('Buffering...');
    super.write();
    console.log('Crypting...');
  };
}

class BufferedNetworkStream extends NetworkStream {
  read() {
    console.log('Buffering...');
    super.read();
  };

  write() {
    console.log('Buffering...');
    super.write();
  };
}

class CryptoNetworkStream extends NetworkStream {
  read() {
    super.read();
    console.log('Crypting...');
  };

  write() {
    super.write();
    console.log('Crypting...');
  };
}

class BufferedCryptoNetworkStream extends NetworkStream {
  read() {
    console.log('Buffering...');
    super.read();
    console.log('Crypting...');
  };

  write() {
    console.log('Buffering...');
    super.write();
    console.log('Crypting...');
  };
}

class BufferedMemoryStream extends MemoryStream {
  read() {
    console.log('Buffering...');
    super.read();
  };

  write() {
    console.log('Buffering...');
    super.write();
  };
}

class CryptoMemoryStream extends MemoryStream {
  read() {
    super.read();
    console.log('Crypting...');
  };

  write() {
    super.write();
    console.log('Crypting...');
  };
}

class BufferedCryptoMemoryStream extends MemoryStream {
  read() {
    console.log('Buffering...');
    super.read();
    console.log('Crypting...');
  };

  write() {
    console.log('Buffering...');
    super.write();
    console.log('Crypting...');
  };
}

const streamA = new FileStream()
streamA.read();
const streamC = new BufferedCryptoFileStream();
streamC.write();







