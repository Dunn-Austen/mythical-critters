class Dragon {
  constructor(name, rider, color) {
    // Expecting a fail die to undefined, we are passing arguments without a antecedent parameters
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.newProperty = 0;
    }

  eat() {
    this.newProperty = this.newProperty + 1;
    if (this.newProperty >= 3) {
      this.hungry = false;
      }
    }
  }

module.exports = Dragon;
