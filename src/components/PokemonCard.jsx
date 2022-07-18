import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentPokemonState } from '../atoms/currentPokemonAtom';
import { setBg } from '../utils/setBg';

const PokemonCard = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [mounted, setMounted] = useState(false);
  const [currentPokemon, setCurrentPokemon] =
    useRecoilState(currentPokemonState);

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
        <Link
          to={window.location.pathname === '/details' ? '' : 'details'}
          className="col-span-1"
        >
          <article
            className="h-[fit-content] bg-white flex flex-col items-center rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] cursor-pointer transition duration-200 ease-out col-span-1"
            onClick={() => {
              setCurrentPokemon((currentPokemon) => pokemonDetails);
              localStorage.setItem(
                'currentPokemon',
                JSON.stringify(pokemonDetails)
              );
            }}
          >
            <div
              className={`w-full flex justify-center items-center rounded-t-lg ${setBg(
                pokemonDetails?.types[0].type.name
              )}`}
            >
              <img
                src={
                  pokemonDetails?.sprites?.other['official-artwork']
                    .front_default
                }
                className="h-[160px] w-[160px] my-2"
                alt={name}
              />
            </div>
            <h2 className="text-sm sm:text-xl md:text-[28px] font-bold text-[#333333] capitalize self-start pl-4 pt-2 md:py-2">
              {pokemonDetails?.id > 9 ? '#0' : '#00'}
              {pokemonDetails?.id} {name}
            </h2>
            <ul className="w-full flex justify-start pl-4 poke__types pb-4">
              {pokemonDetails?.types?.map(({ type: { name } }) => (
                <li
                  className="text-[12px] sm:text-lg md:text-2xl capitalize font-light text-[#828282]"
                  key={name}
                >
                  {name}
                </li>
              ))}
            </ul>
          </article>
        </Link>
      )}
    </>
  );
};

export default PokemonCard;
