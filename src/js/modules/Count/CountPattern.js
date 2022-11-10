import { CountWords } from "./CountWords.js";

export class CountPattern extends CountWords {
  constructor(input, pattern) {
    super(input);
    this.pattern = pattern;
  }

  count() {
    const joinedInput = super.input.join("");
    const pattern = new RegExp(this.pattern, "g");
    const matches = joinedInput.match(pattern);
    return (matches || []).length;
  }
}
