import { useState, useEffect } from "react";
import PokemonsCard from "./PokemonsCard";

const PokemonReact = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";
  const fetchpokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      //   console.log(data);

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();

        return data;
      });
      // console.log(detailedPokemonData);

      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchpokemon();
  }, []);

  const SearchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="p-6 bg-gray-100 items-center text-center min-h-screen">
        <header className="mt-4 mb-4 text-center">
          <h1 className="font-bold text-3xl text-center text-blue-600">
            Let Catch Pokémon!
          </h1>
        </header>

        <div className="">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex justify-center ml-14">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* {pokemon.map((curPokemon) => ( */}
            { SearchData.map((curPokemon) => (
              <PokemonsCard key={curPokemon.id} pokemonData={curPokemon} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PokemonReact;
