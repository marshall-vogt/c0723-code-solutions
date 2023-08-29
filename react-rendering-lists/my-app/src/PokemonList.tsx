export default function PokemonList({ pokedexArray }) {
  const pokemonList = pokedexArray.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  console.log(pokemonList);
  return <ul>{pokemonList}</ul>;
}
