export default class MainForm {
  buttonClick() {
    // flaw: depeneds on concrete class
    const splitter = new BinarySpitter()
  }
}

class BinarySpitter {
  split() {
    console.log('BinarySpitter is working!');
  }
}

class VideoSpitter {
  split() {
    console.log('VideoSpitter is working!');
  }
}

class ImageSpitter {
  split() {
    console.log('ImageSpitter is working!');
  }
}