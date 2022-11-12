import { Film } from "./Film";
import { readMovies } from "./readMovies";
import fs from "fs";

export const createMovie = (name: string, autor: string, year: number) => {
  const movies = readMovies();
  const jsonMovies: object[] = JSON.parse(movies);
  const movie = new Film(1, name, autor, year);
  jsonMovies.push(movie);
  fs.writeFileSync("src/modules/Film/db/films.json", JSON.stringify(jsonMovies));
};