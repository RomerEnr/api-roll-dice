import { films } from "../../index";

export const deleteFilm = (app: any) => {
  app.delete("/film/:year", (req: any, res: any) => {
    const { year } = req.params;
    const film = films.find((film) => film.year === parseInt(year));
    if (film) {
      films.splice(films.indexOf(film), 1);
      res.json({ message: "Film deleted" });
    } else {
      res.json({ message: "Film not found" });
    }
  });
};
