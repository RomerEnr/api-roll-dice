import { readWords } from "./readWords.js";

export const countWords = async (filePath) => {
  const words = await readWords(filePath).then(words => words)
    .catch(err => console.log(err));
  return words.length;
};
