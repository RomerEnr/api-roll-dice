import fs from "fs";
import { _filePath2 } from "../../wordsExercise.js";

export const wordsInNewFile = async (words = []) => {
  words.map(word => {
    fs.appendFileSync(_filePath2, `${word}\n`, "utf-8", (err) => {
      if (err) {
        return `Ha habido un ${err}`;
      } else {
        return "Archivo salvado con exito";
      };
    });
  });
};
