const CardGrid = ({ pokemonData }) => {
    return (
        <>
            <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-white p-4 w-72 h-auto rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-start relative">
                    {/* Image Section with Animated Background */}
                    <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x rounded-t-lg flex items-center justify-center">
                        <img
                            src={pokemonData.sprites.other.dream_world.front_default}
                            alt={pokemonData.name}
                            className="w-28 h-28 object-cover"
                        />
                    </div>

                    {/* Name and Type Section */}
                    <div className="mt-4 text-center">
                        <h1 className="font-bold text-xl">{pokemonData.name}</h1>
                        <h1 className="bg-green-400 text-white rounded-md font-semibold px-2 py-1 mt-2">
                            {pokemonData.types.map((curType) => curType.type.name).join(", ")}
                        </h1>
                    </div>

                    {/* Details Section with 3 Columns */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="text-center">
                            <span className="text-sm font-semibold">Height:</span>
                            <p className="text-sm">{pokemonData.height}</p>
                        </div>
                        <div className="text-center">
                            <span className="text-sm font-semibold">Weight:</span>
                            <p className="text-sm">{pokemonData.weight}</p>
                        </div>
                        <div className="text-center">
                            <span className="text-sm font-semibold">Speed:</span>
                            <p className="text-sm">{pokemonData.stats[5].base_stat}</p>
                        </div>
                        <div className="text-center">
                            <span className="text-sm font-semibold">Experience:</span>
                            <p className="text-sm">{pokemonData.base_experience}</p>
                        </div>
                        <div className="text-center">
                            <span className="text-sm font-semibold">Attack:</span>
                            <p className="text-sm">{pokemonData.stats[1].base_stat}</p>
                        </div>
                        <div className="text-center">
                            <span className="text-sm font-semibold">Ability:</span>
                            <p className="text-sm">
                                {pokemonData.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0, 1).join(", ")}
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default CardGrid;
