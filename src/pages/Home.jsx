import React from 'react';
import { useRecoilValue } from 'recoil';
import { detailsState } from '../atoms/detailsAtom';
import { modalState } from '../atoms/modalAtom';
import CaptureModal from '../components/CaptureModal';
import DetailsCard from '../components/DetailsCard';
import Header from '../components/Header';
import MobileCapturedButton from '../components/MobileCapturedButton';
import Pagination from '../components/Pagination';
import PokemonList from '../components/PokemonList';

const Home = () => {
  const detailsVisible = useRecoilValue(detailsState);
  const modalIsOpen = useRecoilValue(modalState);

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
        {detailsVisible && (
          <div className="flex flex-col col-span-1 w-full">
            <DetailsCard />
          </div>
        )}
      </main>
      <Pagination />
      <MobileCapturedButton />
      {modalIsOpen && <CaptureModal />}
    </>
  );
};

export default Home;
