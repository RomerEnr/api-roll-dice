
export class Dise {
  sides = 6;

  constructor(sides) {
    this.sides = sides;
  }

  rollDice() {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}
