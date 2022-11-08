import fs from "fs";
const _filePath = "src/fichero.txt";
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
  return words.length
};

// const wordsInLines = (words)=>{

// }

// const wordsInText = (filePath) => {
  
  

//   return words

const wordsLength = await countWords(_filePath)
console.log(wordsLength);