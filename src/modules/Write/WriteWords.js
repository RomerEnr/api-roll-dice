export class WriteWords {
  constructor(words) {
    this.words = words;
  }

  writeWords() {
    return new Promise((resolve, reject) => {
      if (Array.isArray(this.words)) {
        resolve(this.words);
      } else {
        const error = new Error("Parameter is not an array of words.");
        reject(error);
      }
    });
  }
}
