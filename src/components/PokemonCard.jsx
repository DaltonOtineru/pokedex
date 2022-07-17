import React, { useEffect, useState } from 'react';
import { setBg } from '../utils/setBg';

const PokemonCard = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(url);
      const pokemonData = await data.json();
      setPokemonDetails(pokemonData);
      setMounted(true);
    };
    fetchDetails();
  }, [url]);

  return (
    <>
      {mounted && (
        <article className="h-[fit-content] bg-white flex flex-col items-center rounded-lg shadow-md cursor-pointer">
          <div
            className={`w-full flex justify-center items-center rounded-t-lg ${setBg(
              pokemonDetails?.types[0].type.name
            )}`}
          >
            <img
              src={pokemonDetails?.sprites?.front_shiny}
              className="h-[160px] w-[160px]"
              alt={name}
            />
          </div>
          <h2 className="text-sm sm:text-xl md:text-[28px] font-bold text-[#333333] capitalize self-start pl-4 pt-2 md:py-2">
            {pokemonDetails?.id > 9 ? '#0' : '#00'}
            {pokemonDetails?.id} {name}
          </h2>
          <ul className="w-full flex justify-start pl-4 poke__types pb-4">
            {pokemonDetails?.types?.map(({ type: { name } }) => (
              <li className="text-[12px] sm:text-lg md:text-2xl capitalize font-light text-[#828282]">
                {name}
              </li>
            ))}
          </ul>
        </article>
      )}
    </>
  );
};

export default PokemonCard;
