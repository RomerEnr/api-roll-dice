import { Film } from "../../modules/Film/Film";


export const createFilm = (app: any)=>{
  app.post("/film", (req: any, res: any)=>{
    const film = new Film(req.body.name, req.body.autor, req.body.year);
    const { name, autor, year } = film;
    res.json({ name, autor, year });
  });
};