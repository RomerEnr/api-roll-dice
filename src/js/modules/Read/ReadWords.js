export class ReadWords {
  constructor(input) {
    this.input = input;
  }

  readWords() {
    return new Promise((resolve, reject) => {
      if (typeof this.string !== "string") {
        resolve(this.string);
      } else {
        const error = new Error("Parameter is not an string.");
        reject(error);
      }
    });
  }
}
