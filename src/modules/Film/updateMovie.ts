import { readMovies } from "./readMovies";
import fs from "fs";

export const updateMovie = (id: number, title: string, autor: string, year: number) => {
  const movies = readMovies();
  const jsonMovies = JSON.parse(movies); 

  const movie = jsonMovies.find((movie: any) => movie.id === id);

  if (movie) {
    movie.title = title;
    movie.autor = autor;
    movie.year = year;

    const newMovies = JSON.stringify(jsonMovies);
    fs.writeFileSync("src/modules/Film/db/films.json", newMovies);

    return movie;
  } else {
    return { message: "Movie not found" };
  }
};