
import { Dise } from "../modules/Dise/Dise";

export const routeDise = (app: any) => {
  app.get("/Dise", (req: any, res: any) => {
    const sides = req.query.sides;
    const dice = new Dise(sides);
    res.json({ "side": dice.rollDice() });
  });
};