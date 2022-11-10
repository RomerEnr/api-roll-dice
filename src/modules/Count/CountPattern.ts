import { CountWords } from "./CountWords";

export class CountPattern extends CountWords {
  "pattern": string;

  constructor(input: string[], pattern: string) {
    super(input);
    this.pattern = pattern;
  }

  count(): number {
    const joinedInput = this.input.join("");
    const pattern = new RegExp(this.pattern, "g");
    const matches = joinedInput.match(pattern);
    return (matches || []).length;
  }
}