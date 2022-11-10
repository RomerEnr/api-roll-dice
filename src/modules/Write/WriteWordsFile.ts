import { WriteWords } from "./WriteWords";
import fs from "fs";

export class WriteWordsFile extends WriteWords {
  filePath: string;
  joinMethod: string;

  constructor(words: string[], filePath: string, joinMethod: string = "\n") {
    super(words);
    this.filePath = filePath;
    this.joinMethod = joinMethod;
  }

  writeWords(): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filePath, this.words.join(this.joinMethod), err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
