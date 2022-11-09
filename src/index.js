import { ReadWordsFile } from "./modules/Read/ReadWordsFile.js";
import { ReadWordsInput } from "./modules/Read/ReadWordsInput.js";
import { WriteWordsFile } from "./modules/Write/WriteWordsFile.js";
import { CountWords } from "./modules/Count/CountWords.js";
import { CountPattern } from "./modules/Count/CountPattern.js";

const _filePath = "src/files/fichero.txt";
export const _filePath2 = "src/files/fichero3.txt";

const main = async() => {
  const readWordsFile = new ReadWordsFile(_filePath);
  const readWordsInput = new ReadWordsInput("Hola mundo");
  const words = await readWordsFile.readWords();
  words.push(...(await readWordsInput.readWords()));
  const countWords = new CountWords(words);
  const wordsLength = countWords.count();
  const countPattern = new CountPattern(words, "a");
  const aTimes = countPattern.count();
  console.log(words, wordsLength, aTimes);

  const formatedWords = words.join("\n");
  const writeWordsFile = new WriteWordsFile(formatedWords, _filePath2);
  writeWordsFile.writeWords();
};

await main();
