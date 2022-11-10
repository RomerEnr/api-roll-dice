import { countWords } from "./modules/modules.words-files/countWords.js";
import { readWords } from "./modules/modules.words-files/readWords.js";
import { wordsInNewFile } from "./modules/modules.words-files/wordsInNewFile.js";


const _filePath = "src/ficheros/fichero.txt";
export const _filePath2 = "src/ficheros/fichero2.txt";

const fullWords = await readWords(_filePath);
const wordsLength = await countWords(_filePath);
wordsInNewFile(fullWords);
console.log(fullWords, wordsLength);

