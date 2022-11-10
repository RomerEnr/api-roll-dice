import express from "express";
import { routeDise } from "./routes/dise.route.js";
const app = express();
const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Dise API.");
});

// Use: http://localhost:3000/Dise?sides=[number]
routeDise(app);

app.listen(port, () => {
  console.log(`Dise app listening on port ${port}`);
});

export const initServer = (port) => {
  app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
  });
};
