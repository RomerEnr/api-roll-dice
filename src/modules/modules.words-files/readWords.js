import fs from "fs";
let words = "";
export const readWords = (filePath) =>{
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