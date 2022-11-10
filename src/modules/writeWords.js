import fs from "fs";

export const writeWords = (words, filePath) => {
  return new Promise((resolve, reject) => {
    if (typeof words === "string") {
      fs.writeFile(filePath, words, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("El fichero se ha escrito correctamente");
          resolve("Archivo salvado con exito");
        }
      });
    } else {
      const error = new Error("El parametro words no es un string");
      reject(error);
    }
  });
};
