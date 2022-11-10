import { films } from "../../index";

export const getFilms = (app: any) => {
  app.get("/films", (req: any, res: any) => {
    res.json(films);
  });
};
