class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.numberTracker = 0;
    this.layingDown = false;
  }
  shoot() {
    this.numberTracker +=1;
    if (this.numberTracker >= 3 || this.standing === false && this.layingDown === true) {
      this.cranky = true;
      return "NO!";
    } else {
    return 'Twang!!!';
    }
  }
  run() {
    this.numberTracker +=1;
    if (this.numberTracker >= 3 || this.standing === false && this.layingDown === true) {
      this.cranky = true;
      return "NO!";
    }
    return 'Clop clop clop clop!!!'
  }
  sleep() {
    this.cranky = false;
    this.numberTracker = 0;
    if (this.standing === true) {
      return 'NO!';
    } else if (this.standing === false && this.layingDown === true) {
      return 'ZZZZ'
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing === true && this.layingDown === false && this.cranky === true) {
    this.cranky = false;
    this.numberTracker = 0;
  } else if (this.standing === false && this.layingDown === true) {
    return 'Not while I\'m laying down!';
  } else if (this.numberTracker < 3 && this.cranky != true ) {
    this.cranky = true;
      }
    }
  }

module.exports = Centaur;
