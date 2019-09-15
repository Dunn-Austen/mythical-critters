
class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.counter = 0;
  }
  receiveBelief() {
    this.dust = 11;
  }
  believe() {
    this.dust = 20;
  }
  makeDresses(flowersArray) {
    this.clothes.dresses = this.clothes.dresses.concat(flowersArray);
  }
  provoke() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(object) {
    if (this.disposition === 'Vengeful') {
      object.disposition = 'Malicious';
      this.humanWards.push(object);
      this.counter++;
    }
    if (this.counter > 2) {
      this.disposition = 'Good natured';
    }
    return object;
  }
}

module.exports = Fairy;
