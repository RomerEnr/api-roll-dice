import { CountWords } from "./CountWords.js";

export class CountPattern extends CountWords {
  constructor(input, pattern) {
    super();
    this.input = input;
    this.pattern = pattern;
  }

  count() {
    const joinedInput = this.input.join("");
    const pattern = new RegExp(this.pattern, "g");
    const matches = joinedInput.match(pattern);
    return (matches || []).length;
  }
}
