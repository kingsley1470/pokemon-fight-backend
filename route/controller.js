


const getPokemonById = (id, pokemonList) => {
  return pokemonList.find((pokemon) => pokemon.id === parseInt(id));
};

module.exports = getPokemonById;
