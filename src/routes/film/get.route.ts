import { readMovies } from "../../modules/Film/readMovies";

export const getFilms = (app: any) => {
  app.get("/films", (req: any, res: any) => {
    const movies = readMovies();
    const films = JSON.parse(movies);
    res.json(films);

  });
};
