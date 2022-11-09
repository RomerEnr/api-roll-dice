import { Dice } from "./classes/Dice.js";
import { helloWorldServer, initServer } from "./server.js";

const main = () => {
  
  initServer(3000)
  helloWorldServer();

};


main();