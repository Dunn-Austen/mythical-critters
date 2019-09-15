class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }
  encounter(humanObj) {
    humanObj.encounterCounter++;
    if (humanObj.encounterCounter === 3 || humanObj.encounterCounter === 6) {
      this.swings++;
    }
    if (this.swings === 2) {
      humanObj.knockedOut = true;
    }
  }
  swingAt(humanObj) {
    this.swings++;
  }
  apologize(humanObj) {
    humanObj.knockedOut = false;
  }
}

module.exports = Ogre;
