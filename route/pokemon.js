const express = require("express");
const pokemonRoute = express.Router();
const {getAllPokemon, getSinglePokemon, getPokemonInfo} = require('../controllers/pokemonControllers.js')

pokemonRoute.route('/').get(getAllPokemon);
pokemonRoute.route('/:id').get(getSinglePokemon);
pokemonRoute.route("/:id/:info").get(getPokemonInfo);

module.exports = pokemonRoute;