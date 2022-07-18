import { EmojiSadIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import pokedex from '../assets/pokedex_logo.svg';
import { CgPokemon } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const CapturedPage = () => {
  const [captured, setCaptured] = useState(null);
  console.log(captured);

  useEffect(() => {
    const capturedPokemons = JSON.parse(localStorage.getItem('captured'));
    if (capturedPokemons) {
      setCaptured(capturedPokemons);
    }
  }, []);

  return (
    <>
      <header
        className={`max-w-[1440px] flex justify-center md:justify-start items-center mx-auto pt-16 pb-12 ${
          captured === null && 'md:justify-center'
        }`}
      >
        <Link to="/">
          <img src={pokedex} alt="Pokedex" className="cursor-pointer" />
        </Link>
      </header>

      {captured === null && (
        <main className="flex justify-center">
          <div className="captured__none rounded-xl mt-28 p-10 py-20 space-y-8 text-[#333333] max-w-[90%]">
            <h1 className="font-bold flex items-center text-xl sm:text-2xl md:text-3xl text-center">
              Oops! Looks like you haven't caught any Pokemon yet
            </h1>
            <p className="text-center textlg sm:text-xl font-semibold">
              Capture some Pokemon and come back to look at their details!
            </p>
            <div className="flex justify-center -mb-10">
              <Link to="/">
                <button className="py-2 px-4 flex  bg-[#EB5435] rounded-lg text-white text-xl font-semibold hover:scale-[1.01] transition duration-200 ease-out">
                  Capture Pokemons
                </button>
              </Link>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default CapturedPage;
