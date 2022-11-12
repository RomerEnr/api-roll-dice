import { deleteMovie } from "../../modules/Film/deleteMovie";

export const deleteFilm = (app: any) => {
  app.delete("/film/:id", (req: any, res: any) => {
    const { id } = req.params;  

    try {
      const movie = deleteMovie(parseInt(id));
      res.status(200).json(movie);
    } catch (error){
      res.status(400).json({ error });

    }

  });
};
