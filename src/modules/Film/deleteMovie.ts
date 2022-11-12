import { readMovies } from "./readMovies";
import fs from "fs";

export const deleteMovie = (id: number) =>{
  const movies = readMovies();
  const jsonMovies = JSON.parse(movies);
  const movie = jsonMovies.find((movie: any)=> movie.id === id);

  if (movie){
    jsonMovies.splice(jsonMovies.indexOf(movie), 1);
    const newMovies = JSON.stringify(jsonMovies);
    fs.writeFileSync("src/modules/Film/db/films.json", newMovies);

    return movie;
  } else {
    return { message: "Movie not found" };
  }
};
