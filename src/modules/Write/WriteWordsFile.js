import { WriteWords } from "./WriteWords.js";
import fs from "fs";

export class WriteWordsFile extends WriteWords {
  constructor(words, filePath) {
    super();
    this.words = words;
    this.filePath = filePath;
  }

  writeWords = () => {
    return new Promise((resolve, reject) => {
      if (typeof this.words === "string" && typeof this.filePath === "string") {
        fs.writeFile(this.filePath, this.words, err => {
          if (err) {
            reject(err);
          } else {
            resolve(this.words);
          }
        });
      } else if (typeof this.words !== "string") {
        const error = new Error("Parameter words is not a formated string to print.");
        reject(error);
      } else {
        const error = new Error("Parameter filepath is not a correct path.");
        reject(error);
      }
    });
  };
}
