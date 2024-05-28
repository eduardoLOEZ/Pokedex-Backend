import axios from "axios";

export const getPokemons = async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : null;
    const page = req.query.page ? parseInt(req.query.page) : null;
    const search = req.query.search ? req.query.search.toLowerCase() : null;

    let pokemons = await fetchPokemons();

    if (search) {
      pokemons = searchPokemons(pokemons, search);
      if (pokemons.length === 0) {
        return res.status(404).json({
          error: `No se encontró ningún Pokémon con el nombre '${req.query.search}'`,
        });
      }
    }
    //se ordena alfabeticamente
    pokemons = paginatePokemons(pokemons, limit, page);

    res.json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los pokemons");
  }
};

const paginatePokemons = (pokemons, limit, page) => {
  if (limit !== null && page !== null) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return pokemons.slice(startIndex, endIndex);
  }
  return pokemons;
};

const fetchPokemons = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=100"
  );
  let pokemons = response.data.results;

  const detailedPokemons = await Promise.all(
    pokemons.map(async (pokemon) => {
      const pokemonDetails = await axios.get(pokemon.url);
      return {
        name: pokemonDetails.data.name,
        image: pokemonDetails.data.sprites.front_default,
        abilities: pokemonDetails.data.abilities.map((ability) => ({
          name: ability.ability.name,
        })),
      };
    })
  );
  console.log(detailedPokemons);
  detailedPokemons.sort((a, b) => a.name.localeCompare(b.name));
  return detailedPokemons;
};

const searchPokemons = (pokemons, search) => {
  return pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search)
  );
};

export const getPokemonDetails = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const pokemonDetails = {
      name: response.data.name,
      image: response.data.sprites.front_default,
      abilities: response.data.abilities.map((ability) => ({
        name: ability.ability.name,
      })),
      base_experience: response.data.base_experience,
      height: response.data.height,
      weight: response.data.weight,
    };

    res.json(pokemonDetails);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los detalles del pokemon");
  }
};
