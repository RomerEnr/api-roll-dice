import { countWords } from "./modules/countWords.js";
import { readWords } from "./modules/readWords.js";

const _filePath = "src/ficheros/fichero.txt";
export const _filePath2 = "src/ficheros/fichero3.txt";

const main = async() => {
  const words = await readWords(_filePath);
  const wordsLength = await countWords(_filePath);
  const formatWords = words.join("\n");
  writeWords(formatWords, _filePath2);
  console.log(words, wordsLength);
};

await main();
