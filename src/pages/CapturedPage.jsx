import { useEffect, useState } from 'react';
import pokedex from '../assets/pokedex_logo.svg';
import { Link } from 'react-router-dom';
import CapturedList from '../components/CapturedList';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import PageButton from '../components/PageButton';

const CapturedPage = () => {
  const [captured, setCaptured] = useState(null);

  // Check if there's any captured pokemon currently saved in local storage and set to captured state if so
  useEffect(() => {
    const capturedPokemons = JSON.parse(localStorage.getItem('captured'));
    if (capturedPokemons) {
      setCaptured((captured) => capturedPokemons);
    }
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto">
      <header
        className={`px-6 w-full flex justify-center md:justify-start items-center mx-auto pt-16 pb-12 ${
          captured === null && 'md:justify-center'
        }`}
      >
        <Link to="/">
          <img src={pokedex} alt="Pokedex" className="cursor-pointer" />
        </Link>
      </header>

      {/* If there are no captured pokemon display these elements */}
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
      {/* If there is captured pokemon display the header and captured pokemons list */}
      {captured && (
        <main className="flex flex-col px-6 pb-12">
          <div className="hidden place-content-center px-6 captured__titles rounded-2xl md:grid grid-cols-5 h-[60px]">
            <div className="col-span-2 font-semibold text-lg lg:text-xl">
              <h3>POKEMON</h3>
            </div>
            <div className="col-span-1 font-semibold text-lg lg:text-xl">
              <h3>NICKNAME</h3>
            </div>
            <div className="col-span-1 font-semibold text-lg lg:text-xl">
              <h3>CAPTURED AT</h3>
            </div>
            <div className="col-span-1 font-semibold text-lg lg:text-xl overflow-visible whitespace-nowrap">
              <h3>CAPTURED LEVEL</h3>
            </div>
          </div>
          <CapturedList />
          <div className="sm:w-3/4 md:w-full mx-auto py-2">
            <Link to="/">
              <PageButton back text="Back" Icon={ArrowLeftIcon} />
            </Link>
          </div>
        </main>
      )}
    </div>
  );
};

export default CapturedPage;
