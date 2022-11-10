
import { Dise } from "../modules/Dise/Dise.js";

export const routeDise = (app) => {
  app.get("/Dise", (req, res) => {
    const sides = req.query.sides;
    const dice = new Dise(sides);
    setTimeout(() => {
      res.send("throwing dice... " + dice.rollDice());
    }, 3000);
  });
};
