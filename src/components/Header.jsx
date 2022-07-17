import React from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../assets/pokeball.svg';
import pokedexLogo from '../assets/pokedex_logo.svg';

const Header = ({ detailsPage }) => {
  return (
    <header className="md:col-span-1 lg:col-span-2 xl:col-span-3 justify-start">
      <div
        className={`py-6 items-center flex 
          justify-center md:justify-between w-[90%] max-w-[1332px] mx-auto
        ${detailsPage && '!w-full mx-0 px-2 pl-6 flex-col lg:flex-row'}`}
      >
        <Link to="/">
          <img
            className="w-[221px] h-[80px] sm:w-[331px] sm:h-[120px]"
            src={pokedexLogo}
            alt="Pokedex"
          />
        </Link>
        <div className={`${detailsPage && 'w-[331px] lg:w-fit'}`}>
          <Link to="/" className="hidden md:inline">
            <div
              className={`flex items-center justify-center bg-[#EB5435] rounded-full text-white  font-semibold px-2 ${
                detailsPage
                  ? '!text-2xl !lg:text-2xl py-3 lg:py-0 mt-4 lg:mt-0'
                  : 'text-2xl lg:text-4xl'
              }`}
            >
              <img
                src={pokeball}
                className={`${detailsPage && 'md:h-12'} h-16 lg:h-20`}
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
