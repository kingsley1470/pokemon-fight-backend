const pokemonData = require("../pokemonData.json");
const getPokemonById = require("../controllers");

const getAllPokemon = (req, res) => {
  return res.send(pokemonData);
}

const getSinglePokemon = (req, res) => {
  return res.status(200).send(getPokemonById(parseInt(req.params.id), pokemonData));
}

const getPokemonInfo = (req, res) => {
  const { id, info } = req.params;
  const getInfo = getPokemonById(parseInt(id), pokemonData)[info];
  res.status(200).send(getInfo);
}

module.exports = {getAllPokemon, getSinglePokemon, getPokemonInfo}