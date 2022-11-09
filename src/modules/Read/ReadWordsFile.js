import { ReadWords } from "./ReadWords.js";
import fs from "fs";

export class ReadWordsFile extends ReadWords {
  constructor(filePath) {
    super();
    this.input = filePath;
  }

  readWords = () => {
    return new Promise((resolve, reject) => {
      fs.readFile(this.input, (err, data) => {
        if (err) {
          reject(err);
        } else {
          const line = data.toString().split("\n");
          const words = line.map(line => line.split(" ")).flat();
          resolve(words);
        }
      });
    });
  };
}
