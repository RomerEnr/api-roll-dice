import { updateMovie } from "../../modules/Film/updateMovie";
export const updateFilm = (app: any) => {
  app.put("/film/:id", (req: any, res: any) => {
    const { id } = req.params;
    const { title, autor, year } = req.body;

    try {
      const movie = updateMovie(parseInt(id), title, autor, year);
      res.status(200).json(movie);
    } catch (error) {
      res.status(400).json({ error });
    }
  });
};