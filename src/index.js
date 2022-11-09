import { countWords } from "./modules/countWords.js";
import { readWords } from "./modules/readWords.js";
import { wordsInNewFile } from "./modules/wordsInNewFile.js";

const _filePath = "src/ficheros/fichero.txt";
export const _filePath2 = "src/ficheros/fichero2.txt";



const fullWords = await readWords(_filePath);
console.log(fullWords);
const wordsLength = await countWords(_filePath);
console.log(wordsLength);
wordsInNewFile(fullWords);
