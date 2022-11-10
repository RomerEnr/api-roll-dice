export class WriteWords {
  words: string[];

  constructor(words: string[]) {
    this.words = words;
  }

  writeWords(): Promise<void> {
    return new Promise((resolve) => {
      console.log(this.words);
      resolve();
    });
  }
}