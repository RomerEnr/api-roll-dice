import { ReadWords } from "./ReadWords";

export class ReadWordsInput extends ReadWords {
  constructor(input: string) {
    super(input);
  }

  readWords(): Promise<string[]> {
    return new Promise((resolve) => {
      const words = this.input.split(" ");
      resolve(words);
    });
  }
}
