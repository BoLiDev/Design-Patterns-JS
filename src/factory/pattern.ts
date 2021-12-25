export default class MainForm {
  buttonClick(factory: ISplitterFactor) {
    // dynamic new
    const splitter = factory.creatSplitter()
    splitter.split();
  }
}

abstract class ISplitter {
  abstract split():void;
}

abstract class ISplitterFactor {
  abstract creatSplitter():ISplitter;
}

class BinarySpitter extends ISplitter {
  split() {
    console.log('BinarySpitter is working!');
  }
}

class BinarySpitterFactory extends ISplitterFactor{
  creatSplitter() {
      return new BinarySpitter();
  }
}

class VideoSpitter extends ISplitter{
  split() {
    console.log('VideoSpitter is working!');
  }
}

class VideoSpitterFactory extends ISplitterFactor{
  creatSplitter() {
      return new VideoSpitter();
  }
}

class ImageSpitter extends ISplitter{
  split() {
    console.log('ImageSpitter is working!');
  }
}

class ImageSpitterFactory extends ISplitterFactor{
  creatSplitter() {
      return new ImageSpitter();
  }
}

const form = new MainForm();
form.buttonClick(new BinarySpitterFactory());
form.buttonClick(new VideoSpitterFactory());
form.buttonClick(new ImageSpitterFactory());