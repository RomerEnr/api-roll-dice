import express from "express";
import { routeDise } from "./routes/dise.route";
import { createFilm } from "./routes/film/post.route";
export const app = express();
const port = 3000 || process.env.PORT;
app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Dise API.");
});


// Use: http://localhost:3000/Dise?sides=[number]
routeDise(app);
createFilm(app);

app.listen(port, () => {
  console.log(`Dise app listening on port ${port}`);
});
