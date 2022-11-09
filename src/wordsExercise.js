import { countWords } from "./modules/countWords.js";
import { readWords } from "./modules/readWords.js";
import { wordsInNewFile } from "./modules/wordsInNewFile.js";


const _filePath = "src/ficheros/fichero.txt";
export const _filePath2 = "src/ficheros/fichero2.txt";

const fullWords = await readWords(_filePath);
const wordsLength = await countWords(_filePath);
wordsInNewFile(fullWords);
console.log(fullWords, wordsLength);

