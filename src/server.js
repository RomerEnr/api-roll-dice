import express from "express";

const app = express();
const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Dise API.");
});

app.listen(port, () => {
  console.log(`Dise app listening on port ${port}`);
});

export const initServer = (port) => {
  app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
  });
};
