export default class FileFormatter {
  format(file: string) {
    if (file.includes('.doc')) {
      console.log('Doc Formatter is working!');
      return;
    } else if (file.includes('.pdf')) {
      console.log('PDF Formatter is working!');
      return;
    } else if (file.includes('.xml')) {
      console.log('XML Formatter is working!');
      return;
    }
    throw Error('Invalid format');
  }
}

const fileFormatter = new FileFormatter();
const format = fileFormatter.format.bind(fileFormatter);
//concrete file
format('file.doc');
format('file.pdf');
format('file.xml');

//unknown file
const file = 'unknown.doc';
format(file);

/*
abstract class Formatter {
  abstract format(file: string):void
}

class DocFormatter extends Formatter {
  format(file: string): void {
    console.log('Doc Formatter is processing: ' + file);
  }
}

class PDFFormatter extends Formatter {
  format(file: string): void {
    console.log('PDF Formatter is processing: ' + file);
  }
}

class XMLFormatter extends Formatter {
  format(file: string): void {
    console.log('XML Formatter is processing: ' + file);
  }
}

const docFormatter = new DocFormatter();
const pdfFormatter = new PDFFormatter();
const xmlFormatter = new XMLFormatter();
*/


