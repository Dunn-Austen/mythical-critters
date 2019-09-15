class Unicorn {
  // Alternative Approach for line 5 (per Mod 2), this.color = color || (or) 'white'; {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }
  isWhite() {
    return false
  }
  says(word) {
    return `**;* ${word}
    *;**`
  }
}
module.exports = Unicorn;
