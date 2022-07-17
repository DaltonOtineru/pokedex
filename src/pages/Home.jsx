import React from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import PokemonList from '../components/PokemonList';

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex pt-4 pb-8 md:py-16">
        <PokemonList />
      </main>
      <Pagination />
    </>
  );
};

export default Home;