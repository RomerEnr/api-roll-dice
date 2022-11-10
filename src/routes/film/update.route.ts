import { Film } from "../../modules/Film/Film";
import { films } from "../../server";
export const updateFilm = (app: any) => {
  app.update("/Film", (req: any, res: any) => {
    const body = req.body();
    const name = req.query.name;
    const filmFound = films.filter(film => film.name == name);
    
    const dice = new Dise(sides);
    res.json({ "side": dice.rollDice() });
  });
};