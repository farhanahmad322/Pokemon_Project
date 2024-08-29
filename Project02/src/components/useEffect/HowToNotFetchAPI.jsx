import { useState, useEffect } from "react";

const HowToNotfetchAPI = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon=async()=>{
    try{
    const res = await fetch(API)
    const data=await res.json();
    setPokemon(data);
     setLoading(false);


    } catch(error){
      console.log(error);
        setError(error);
         setLoading(false);

    }

  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold">Loading...</h1>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-red-500">Error: {error.message}</h1>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Pokémon Details</h1>
      </header>

      {/* Card Section */}
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
          <figure className="p-4 flex flex-col items-center">
            {/* Pokémon Image in Square */}
            <div className="w-60 h-60 bg-gray-100 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Pokémon Name */}
            <h1 className="text-2xl font-semibold text-blue-600 mb-2 capitalize">
              {pokemon.name}
            </h1>
          </figure>

           <div className="px-4 pb-4">
            {/* Pokémon Details in Same Line */}
            <div className="flex justify-around text-lg">
              <p>
                <span className="font-bold text-gray-700">Height:</span>{" "}
                <span className="font-medium text-gray-900">{pokemon.height} dm</span>
              </p>
              <p>
                <span className="font-bold text-gray-700">Weight:</span>{" "}
                <span className="font-medium text-gray-900">{pokemon.weight} hg</span>
              </p>
              <p>
                <span className="font-bold text-gray-700">Speed:</span>{" "}
                <span className="font-medium text-gray-900">{pokemon.stats[5].base_stat}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToNotfetchAPI;
