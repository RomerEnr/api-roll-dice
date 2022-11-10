import { WriteWords } from "./WriteWords.js";
import fs from "fs";

export class WriteWordsFile extends WriteWords {
  constructor(words, filePath) {
    super(words);
    this.filePath = filePath;
  }

  writeWords = () => {
    return new Promise((resolve, reject) => {
      if (typeof super.words === "string" && typeof this.filePath === "string") {
        fs.writeFile(this.filePath, super.words, err => {
          if (err) {
            reject(err);
          } else {
            resolve(super.words);
          }
        });
      } else if (typeof super.words !== "string") {
        const error = new Error("Parameter words is not a formated string to print.");
        reject(error);
      } else {
        const error = new Error("Parameter filepath is not a correct path.");
        reject(error);
      }
    });
  };
}
