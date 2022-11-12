import { films } from "../../index";

export const updateFilm = (app: any) => {
  app.put("/film/:year", (req: any, res: any) => {
    const { year } = req.params;
    const film = films.find((film) => film.year === parseInt(year));
    if (film) {
      film.name = req.body.name;
      film.autor = req.body.autor;
      film.year = req.body.year;
      res.json({ message: "Film updated" });
    } else {
      res.json({ message: "Film not found" });
    }
  });
};