import React from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../assets/pokeball.svg';
import pokedexLogo from '../assets/pokedex_logo.svg';

const Header = () => {
  return (
    <header>
      <div className="py-6 items-center flex justify-center md:justify-between w-[90%] max-w-[1332px] mx-auto">
        <Link to="/">
          <img
            className="w-[221px] h-[80px] sm:w-[331px] sm:h-[120px] "
            src={pokedexLogo}
            alt="Pokedex"
          />
        </Link>
        <Link to="/" className="hidden md:inline">
          <div className="flex items-center bg-[#EB5435] rounded-full text-white text-2xl lg:text-4xl font-semibold px-2">
            <img src={pokeball} className="h-16 lg:h-20" />
            Captured Pokemons
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
