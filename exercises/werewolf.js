class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    // Use === here where we're checking to see that
    // the value is equal
    if (this.human === true && this.wolf === false) {
    this.hungry = true;
    this.human = false;
    this.wolf = true;
      } else {
        if (this.human === false && this.wolf === true) {
              this.human = true;
              this.wolf = false;
              this.hungry = false;
      }
    }
  }
  eat(victim) {
    if (this.wolf === true && this.hungry === true) {
      this.hungry = false;
      this.human = true;
      this.wolf = false;
      victim.alive = false;
    } else {
      return "Cannibalism is not allowed"
    }
  }
}

module.exports = Werewolf;
