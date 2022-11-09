import { rollDice, initServer, home, rollDiceSimple } from "./server.js";

const main = () => {
  home();
  initServer(3000);
  rollDiceSimple();
  rollDice();

};


main();