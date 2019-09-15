class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(personObj) {
    personObj.stoned = true;
    this.statues.unshift(personObj);
    if (this.statues.length > 3) {
      this.statues[3].stoned = false;
      this.statues.shift();
    }
  }
}

module.exports = Medusa;
