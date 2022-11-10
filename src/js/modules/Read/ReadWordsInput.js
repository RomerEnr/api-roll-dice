import { ReadWords } from "./ReadWords.js";

export class ReadWordsInput extends ReadWords {
  constructor(input) {
    super();
    this.input = input;
  }

  readWords = () => {
    return new Promise((resolve, reject) => {
      if (typeof this.input === "string") {
        const words = this.input.split(" ");
        resolve(words);
      } else {
        const error = new Error("El parametro words no es un string");
        reject(error);
      }
    });
  };
}
