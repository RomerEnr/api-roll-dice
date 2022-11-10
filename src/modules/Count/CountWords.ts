export class CountWords {
  "input": string[];
    
  constructor(input: string[]) {
    this.input = input;
  }

  count(): number {
    return this.input.length;
  }
}