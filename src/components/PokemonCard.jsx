import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentPokemonState } from '../atoms/currentPokemonAtom';
import { detailsState } from '../atoms/detailsAtom';
import { setBg } from '../utils/setBg';

const PokemonCard = ({ name, url }) => {
  const [detailsVisible, setDetailsVisible] = useRecoilState(detailsState);

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

  const handlePokemonClick = () => {
    setCurrentPokemon((currentPokemon) => pokemonDetails);
    localStorage.setItem('currentPokemon', JSON.stringify(pokemonDetails));
  };

  return (
    <>
      {mounted && (
        <div
          className="col-span-1"
          onClick={(e) => {
            e.stopPropagation();
            setDetailsVisible(true);
          }}
        >
          <article
            className="h-[fit-content] bg-white flex flex-col items-center rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] cursor-pointer transition duration-200 ease-out col-span-1"
            onClick={() => handlePokemonClick()}
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
            <h2 className="text-sm sm:text-xl lg:text-[28px] font-bold text-[#333333] capitalize self-start pl-4 pt-2 md:py-2">
              {pokemonDetails?.id > 9 ? '#0' : '#00'}
              {pokemonDetails?.id} {name}
            </h2>
            <ul className="w-full flex justify-start pl-4 poke__types pb-4">
              {pokemonDetails?.types?.map(({ type: { name } }) => (
                <li
                  className="text-[12px] sm:text-lg lg:text-2xl capitalize font-light text-[#828282]"
                  key={name}
                >
                  {name}
                </li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </>
  );
};

export default PokemonCard;
