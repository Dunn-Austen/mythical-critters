class Wizard {
  constructor(wizardObj) {
    this.name = wizardObj.name;
    this.bearded = true;
    if (wizardObj.bearded === false) {
      this.bearded = false;
    }
    this.isRested = true;
    this.counter = 0;
    }
  incantation(phrase) {
    return phrase.toUpperCase();
  }
  cast(phrase) {
    this.counter++;
    if (this.counter === 1) {
    return 'MAGIC BULLET';
  } else if (this.counter > 3) {
    this.isRested = false;
    return "I SHALL NOT CAST!";
    }
  }
}

module.exports = Wizard;
