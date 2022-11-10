export class ReadWords {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  readWords(): Promise<string[]> {
    return new Promise((resolve) => {
      resolve([this.input]);
    });
  }
}