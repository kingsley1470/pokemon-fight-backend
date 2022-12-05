const express = require("express");
const path = require("path");
const pokemonData = require("./pokemonData.json");
const getPokemonById = require("./route/controller");

const app = express();

const cors = require('cors')

app.use(cors({origin:"*", optionsSuccessStatus: 200}))


app.get("/pokemon", (req, res) => {
  res.send(pokemonData);
});

app.get("/pokemon/:id", (req, res) => {
  res.status(200).send(getPokemonById(parseInt(req.params.id), pokemonData));
});

app.get("/pokemon/:id/:info", (req, res) => {
  const { id, info } = req.params;
  const getInfo = getPokemonById(parseInt(id), pokemonData)[info];
  res.status(200).send(getInfo);
});
const PORT = process.env.PORT || 4444;

app.listen(PORT, () => console.log(`server started on port${PORT}`));
