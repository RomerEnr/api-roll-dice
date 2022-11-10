import { ReadWordsFile } from "./modules/Read/ReadWordsFile";
import { ReadWordsInput } from "./modules/Read/ReadWordsInput";
import { WriteWordsFile } from "./modules/Write/WriteWordsFile";
import { CountWords } from "./modules/Count/CountWords";
import { CountPattern } from "./modules/Count/CountPattern";

const _filePath: string = "./public/files/fichero.txt";
export const _filePath2: string = "./public/files/fichero3.txt";

const main = async(): Promise<void> => {
  const readWordsFile = new ReadWordsFile(_filePath);
  const readWordsInput = new ReadWordsInput("Hola mundo");
  const words: string[] = await readWordsFile.readWords();
  words.push(...(await readWordsInput.readWords()));
  const countWords = new CountWords(words);
  const wordsLength = countWords.count();
  const countPattern = new CountPattern(words, "a");
  const aTimes = countPattern.count();
  console.log(words, wordsLength, aTimes);
  const writeWordsFile = new WriteWordsFile(words, _filePath2);
  writeWordsFile.writeWords();
};

main().catch((error) => {
  console.error(error);

  
});


