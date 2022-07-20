import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import pokeball from '../assets/pokeball.svg';
import pokedexLogo from '../assets/pokedex_logo.svg';
import { detailsState } from '../atoms/detailsAtom';

const Header = () => {
  const detailsVisible = useRecoilValue(detailsState);
  return (
    <header className="md:col-span-1 lg:col-span-2 xl:col-span-3 justify-start max-w-[1332px] mx-auto">
      <div
        className={`py-6 items-center flex 
          justify-center md:justify-between w-[95%] max-w-[1332px] mx-auto
        ${detailsVisible && ''}`}
      >
        <Link to="/">
          <img
            className="w-[221px] h-[80px] sm:w-[331px] sm:h-[120px]"
            src={pokedexLogo}
            alt="Pokedex"
          />
        </Link>
        <div
          className={`transition-all duration-300 ${
            detailsVisible && ' xl:-translate-x-[22rem]'
          }`}
        >
          <Link to="/capturedpokemons" className="hidden md:inline">
            <div
              className={`flex items-center justify-center bg-[#EB5435] rounded-full text-white  font-semibold px-2 hover:scale-[1.01] transition duration-200 ease-out text-3xl lg:text-4xl lg:py-1
                `}
            >
              <img
                src={pokeball}
                className={`${detailsVisible && ''}  xl:h-20`}
                alt="Pokeball"
              />
              Captured Pokemons
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
