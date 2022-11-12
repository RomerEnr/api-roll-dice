import fs from "fs";
const filePath = "src/modules/Film/db/films.json";

export const readMovies = ()=>{
  const movies = fs.readFileSync(filePath, "utf-8");

  return movies;
};

