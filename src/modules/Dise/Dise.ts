export class Dise {
  sides: number = 6;

  constructor(sides: number) {
    this.sides = sides;
  }

  rollDice(): number {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}
