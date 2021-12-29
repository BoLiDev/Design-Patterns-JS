export default class TaxCalculator {
  getTax(country: string) {
    if (country === 'CN') {
      return 'CN TAX'
    } else if (country === 'US') {
      return 'US TAX'
    } else if (country === 'UK') {
      return 'UK TAX'
    } else if (country === 'CA') {
      return 'CA TAX'
    }
    throw Error('invalid country')
  }
}

const tax = new TaxCalculator();
console.log(tax.getTax('CN'));
