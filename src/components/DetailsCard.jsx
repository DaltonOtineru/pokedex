import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPokemonState } from '../atoms/currentPokemonAtom';
import { detailsState } from '../atoms/detailsAtom';
import { modalState } from '../atoms/modalAtom';
import { setBg } from '../utils/setBg';

const DetailsCard = () => {
  const [detailsVisible, setDetailsVisible] = useRecoilState(detailsState);
  const [globalCurrentPokemon, setGlobalCurrentPokemon] =
    useRecoilState(currentPokemonState);
  const [currentPokemon, setCurrentPokemon] = useState(() => {
    const localPokemon = JSON.parse(localStorage.getItem('currentPokemon'));
    return localPokemon || globalCurrentPokemon;
  });
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalState);
  const [isCaptured, setIsCaptured] = useState(false);
  const [capturedDetails, setCapturedDetails] = useState({});

  const detailsRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        detailsRef.current &&
        detailsVisible &&
        !detailsRef.current.contains(e.target)
      ) {
        setDetailsVisible(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const capturedPokemon = JSON.parse(localStorage.getItem('captured'));
    if (capturedPokemon) {
      const currentPokemonIndex = capturedPokemon.findIndex(
        (pokemon) => pokemon.name === currentPokemon?.name
      );
      setIsCaptured((isCaptured) => (currentPokemonIndex > -1 ? true : false));
      if (currentPokemonIndex >= 0) {
        setCapturedDetails((capturedDetails) =>
          setCapturedDetails({
            nickname: capturedPokemon[currentPokemonIndex].nickname,
            date: capturedPokemon[currentPokemonIndex].date,
            level: capturedPokemon[currentPokemonIndex].level,
          })
        );
      }
    }
  }, [currentPokemon, modalIsOpen]);

  useEffect(() => {
    const localPokemon = JSON.parse(localStorage.getItem('currentPokemon'));
    setCurrentPokemon((currentPokemon) => localPokemon);
  }, [globalCurrentPokemon]);

  const convertDate = (string) => {
    const date = new Date(string);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleString(undefined, options);
  };

  return (
    <div
      className="sticky top-10 rounded-[44px] shadow-[0_0_16px_0_rgba(0,0,0,0.3)] md:-mt-16 w-[90%] self-center md:w-full h-fit md:mr-4 text-[#333333] transition-all duration-300"
      ref={detailsRef}
      // onClick={() => setDetailsVisible(false)}
    >
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
          <h3 className="font-bold text-lg mb-1">About</h3>
          <ul className="space-y-[10px]">
            <ul className="poke__types inline-flex items-center">
              <p className="mr-1">Type(s): </p>
              {currentPokemon?.types?.map(({ type: { name } }) => (
                <li key={name} className="text-[15px] capitalize">
                  {name}
                </li>
              ))}
            </ul>
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
          <h3 className="font-bold text-lg mb-1">Base Stats</h3>
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
        {isCaptured && (
          <div
            className="w-full detail__group
         rounded-2xl  p-4"
          >
            <h3 className="font-bold text-lg mb-1">Capture Information</h3>
            <ul className="space-y-[10px]">
              {capturedDetails?.nickname && (
                <li className="text-[15px] capitalize">
                  Nickname: {capturedDetails?.nickname}
                </li>
              )}
              <li className="text-[15px] capitalize">
                Captured on: {convertDate(capturedDetails?.date)}
              </li>
              <li className="text-[15px] capitalize">
                Captured Level: {capturedDetails?.level}
              </li>
            </ul>
          </div>
        )}
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
