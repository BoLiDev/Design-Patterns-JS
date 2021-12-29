class TaxCalculator {
  taxStrategy: TaxStrategy = null;
  setStrategy(taxStrategy: TaxStrategy) {
    this.taxStrategy = taxStrategy;
  }
  getTax() {
    if (!this.taxStrategy) {
      throw Error('no tax strategy is indicated');
    }
    return this.taxStrategy.getTax();
  }
}

abstract class TaxStrategy {
  abstract getTax():string;
}

class CNTaxStrategy extends TaxStrategy {
  getTax() {
    return 'CN TAX'
  }
}

class USTaxStrategy extends TaxStrategy {
  getTax() {
    return 'US TAX'
  }
}

class UKTaxStrategy extends TaxStrategy {
  getTax() {
    return 'UK TAX'
  }
}

class CATaxStrategy extends TaxStrategy {
  getTax() {
    return 'CA TAX'
  }
}

const tax = new TaxCalculator();
// const cnTax = new CNTaxStrategy();
// tax.setStrategy(cnTax);
// console.log(tax.getTax());

const STRATEGY_MAPPING = {
  'CN': CNTaxStrategy,
  'US': USTaxStrategy,
  'UK': UKTaxStrategy, 
  'CA': CATaxStrategy
}

function createStrategy(country) {
  return new STRATEGY_MAPPING[country];
}

const country = 'CA';
tax.setStrategy(createStrategy(country))
console.log(tax.getTax());