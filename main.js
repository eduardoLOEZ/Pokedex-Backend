import express from "express";
import cors from "cors";
import router from "./routes/pokemonsRoutes.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    msg: "API-Pokedex",
    version: "1.0.0",
    author: "Eduardo Loeza",
  });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Running Server on port: ${port}`);
});
