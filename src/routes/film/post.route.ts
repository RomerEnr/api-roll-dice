import { createMovie } from "../../modules/Film/createMovie";


export const createFilm = (app: any)=>{
  app.post("/film", (req: any, res: any)=>{
    const { name, autor, year } = req.body;
    
    const movie = createMovie(name, autor, year);

    res.json(movie);
  });
};