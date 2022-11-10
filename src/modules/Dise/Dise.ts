export class Dise {
  // PRIVATE
  private readonly sides: number = 6;

  // setSides(sides: number): void {
  //   this.sides = sides;
  // }

  constructor(sides: number) {
    this.sides = sides;
  }
  
  rollDice(): number {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}
