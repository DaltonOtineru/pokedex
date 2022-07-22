import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { detailsState } from '../atoms/detailsAtom';
import { modalState } from '../atoms/modalAtom';
import { offsetState } from '../atoms/offsetAtom';
import { pokemonsState } from '../atoms/pokemonsAtom';
import CaptureModal from '../components/CaptureModal';
import DetailsCard from '../components/DetailsCard';
import Header from '../components/Header';
import MobileCapturedButton from '../components/MobileCapturedButton';
import Pagination from '../components/Pagination';
import PokemonList from '../components/PokemonList';

const Home = () => {
  const detailsVisible = useRecoilValue(detailsState);
  const modalIsOpen = useRecoilValue(modalState);

  const [pokemons, setPokemons] = useRecoilState(pokemonsState);
  const offset = useRecoilValue(offsetState);
  const URL = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`;

  useEffect(() => {
    // Fetch  initial data from pokemon api and set to global pokemon variable
    // function will re run anytime the offset is updated to display the correct page
    const fetchPokemon = async () => {
      const data = await fetch(URL);
      const { results } = await data.json();
      setPokemons(results);
    };
    fetchPokemon();
  }, [offset]);

  return (
    <>
      <Header />
      <main
        className={`flex pt-4 pb-8 md:py-16 max-w-[1332px] mx-auto ${
          detailsVisible &&
          'flex flex-col-reverse sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'
        }`}
      >
        <PokemonList />
        {/* Conditionally render the pokemon details card based on if the user selects a pokemon */}
        {detailsVisible && (
          <div
            className="flex flex-col col-span-1 w-full"
            data-testid="details-card"
          >
            <DetailsCard />
          </div>
        )}
      </main>
      <Pagination />
      <MobileCapturedButton />
      {/* Conditionally render the modal to capture a pokemon only after the user clicks the capture button */}
      {modalIsOpen && <CaptureModal />}
    </>
  );
};

export default Home;
