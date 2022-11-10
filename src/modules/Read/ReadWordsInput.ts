import { ReadWords } from "./ReadWords";

export class ReadWordsInput extends ReadWords {
  constructor(input: string) {
    super(input);
  }

  async readWords(): Promise<string[]> {
    return this.input.split(" ");
  }
}
