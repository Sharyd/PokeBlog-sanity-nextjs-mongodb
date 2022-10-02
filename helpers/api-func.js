import axios from "axios";
export async function getAllPokemons() {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const result = res.data.results.map(async (p) => {
    return axios.get(p.url).then((res) => ({
      name: res.data.name,
      height: res.data.height,
      weight: res.data.weight,
      image: res.data.sprites.other.dream_world.front_default,
      id: res.data.id,
      stats: res.data.stats,
      types: res.data.types[0].type.name,
    }));
  });

  const allPokemons = await Promise.all(result);
  return allPokemons;
}

export async function getPokemonById(id) {
  const pokemons = await getAllPokemons();
  return pokemons.filter((poke) => poke.id.toString() === id);
}
