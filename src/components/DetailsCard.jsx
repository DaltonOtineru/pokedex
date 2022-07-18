import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPokemonState } from '../atoms/currentPokemonAtom';
import { modalState } from '../atoms/modalAtom';
import { setBg } from '../utils/setBg';

const DetailsCard = () => {
  const [currentPokemon, setCurrentPokemon] =
    useRecoilState(currentPokemonState);
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalState);

  return (
    <div className="sticky top-10 rounded-[44px] shadow-[0_0_16px_0_rgba(0,0,0,0.3)] md:mt-[9rem] w-[90%] self-center md:w-full h-fit md:mr-4 text-[#333333]">
      <div
        className={`rounded-t-[44px] flex flex-col items-center justify-center py-12 ${setBg(
          currentPokemon?.types[0].type.name
        )}`}
      >
        <img
          src={currentPokemon?.sprites?.other['official-artwork'].front_default}
          alt={currentPokemon.name}
          className="h-[140px] w-[140px]"
        />
        <h3 className="text-[26px] capitalize text-white font-bold">
          {currentPokemon?.id > 9 ? '#0' : '#00'}
          {currentPokemon?.id} {currentPokemon.name}
        </h3>
      </div>
      <div className="px-4 pt-8 pb-12 space-y-6">
        <div className="w-full detail__group rounded-2xl p-4">
          <h3 className="font-bold text-lg">About</h3>
          <ul className="space-y-[10px]">
            <li className="text-[15px]">Type(s): </li>
            <li className="text-[15px]">
              Weight: {currentPokemon.weight / 100} kg
            </li>
            <li className="text-[15px]">
              Height: {currentPokemon.height / 100} m
            </li>
          </ul>
        </div>
        <div
          className="w-full detail__group
         rounded-2xl  p-4"
        >
          <h3 className="font-bold text-lg">Base Stats</h3>
          <ul className="space-y-[10px]">
            {currentPokemon.stats.map(({ base_stat, stat: { name } }) => (
              <li
                key={name}
                className={`text-[15px] ${
                  name === 'hp' ? 'uppercase' : 'capitalize'
                }`}
              >
                {name}: {base_stat}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="bg-[#EB5435] font-semibold text-lg text-white rounded-full w-full py-4 hover:scale-[1.01] transition ease-out duration-200"
          onClick={() => setModalIsOpen(true)}
        >
          Capture
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
