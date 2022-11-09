import fs from "fs";
const _filePath = "src/fichero.txt";
const _filePath2 = "src/fichero2.txt";
let words = "";

const readWords = (filePath) =>{
  return new Promise((resolve, reject)=>{
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(`Ha habido un ${err}`)
      } else {
        const line = data.toString().split("\n");
        words = line.map(line => line.split(" ")).flat();
        resolve(words)
      }
    });
  });
};

const countWords = async (_filePath)=>{
  const words = await readWords(_filePath).then(words => words)
                      .catch(err => console.log(err));
  return words.length;
};

const wordsInNewFile = async (words = []) => { 
  words.map(word =>{
    fs.appendFileSync(_filePath2, `${word}\n`, "utf-8", (err)=>{
      if (err){
        return `Ha habido un ${err}`;
      } else {
        return "Archivo salvado con exito";
      };

    });
  });
};

const fullWords = await readWords(_filePath);
console.log(fullWords);
const wordsLength = await countWords(_filePath);
console.log(wordsLength);
wordsInNewFile(fullWords);
