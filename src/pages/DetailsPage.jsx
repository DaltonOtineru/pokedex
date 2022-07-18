import React from 'react';
import DetailsCard from '../components/DetailsCard';
import Header from '../components/Header';
import PokemonList from '../components/PokemonList';
import pokedex from '../assets/pokedex_logo.svg';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import CaptureModal from '../components/CaptureModal';

const DetailsPage = () => {
  const modalIsOpen = useRecoilValue(modalState);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-[1500px] gap-x-6 pb-12">
        <div className="md:col-span-1 lg:col-span-2 xl:col-span-3 hidden md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <Header detailsPage />
          <PokemonList detailsPage />
        </div>
        <div className="flex flex-col col-span-1 w-full">
          <Link to="/">
            <div className="w-[90%] mx-auto my-4 mb-14 justify-center items-center flex md:hidden">
              <img src={pokedex} alt="Pokdex Logo" />
            </div>
          </Link>
          <DetailsCard />
        </div>
      </div>
      <div className="hidden md:inline">
        <Pagination />
      </div>
      {modalIsOpen && <CaptureModal />}
    </>
  );
};

export default DetailsPage;
