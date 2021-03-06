import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentPokemonState } from '../atoms/currentPokemonAtom';
import { detailsState } from '../atoms/detailsAtom';
import { modalState } from '../atoms/modalAtom';
import { setBg } from '../utils/setBg';
import { setIdNumber } from '../utils/setIdNumber';
import { setDate } from '../utils/setDate';

const DetailsCard = () => {
  const [detailsVisible, setDetailsVisible] = useRecoilState(detailsState);
  const [globalCurrentPokemon, setGlobalCurrentPokemon] =
    useRecoilState(currentPokemonState);
  // Set the current pokemon to the currentPokemon in local storage, or to the global current pokemon if there is none
  const [currentPokemon, setCurrentPokemon] = useState(() => {
    const localPokemon = JSON.parse(localStorage.getItem('currentPokemon'));
    return localPokemon || globalCurrentPokemon;
  });
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalState);
  const [isCaptured, setIsCaptured] = useState(false);
  const [capturedDetails, setCapturedDetails] = useState({});

  const detailsRef = useRef();

  useEffect(() => {
    // Event listener to close the pokemon details card if the user clicks outside
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
    // Get the captured pokemons array from localStorage. If there is any, find the index of the current pokemon in that array to see if it's been captured.If the pokemon is captured update the isCaptured state variable to true, and set the captured details object variable to the nickname, level and date it was assigned.
    const capturedPokemons = JSON.parse(localStorage.getItem('captured'));
    if (capturedPokemons) {
      const currentPokemonIndex = capturedPokemons.findIndex(
        (pokemon) => pokemon.name === currentPokemon?.name
      );
      setIsCaptured((isCaptured) => (currentPokemonIndex > -1 ? true : false));
      if (currentPokemonIndex >= 0) {
        setCapturedDetails((capturedDetails) =>
          setCapturedDetails({
            nickname: capturedPokemons[currentPokemonIndex].nickname,
            date: capturedPokemons[currentPokemonIndex].date,
            level: capturedPokemons[currentPokemonIndex].level,
          })
        );
      }
    }
  }, [currentPokemon, modalIsOpen]);

  useEffect(() => {
    // anytime the global state variable for the currently selected pokemon is changed, it's getting that current pokemon data from local storage and setting it as the useState value.
    const localPokemon = JSON.parse(localStorage.getItem('currentPokemon'));
    setCurrentPokemon((currentPokemon) => localPokemon);
  }, [globalCurrentPokemon]);

  return (
    <div
      className="sticky top-10 sm:rounded-[44px] sm:shadow-[0_0_16px_0_rgba(0,0,0,0.3)] md:-mt-16 w-full sm:w-[90%] self-center md:w-full h-fit md:mr-4 text-[#333333] transition-all duration-300"
      ref={detailsRef}
    >
      <div
        className={`sm:rounded-t-[44px] flex flex-col items-center justify-center py-12 ${setBg(
          currentPokemon?.types[0].type.name
        )}`}
      >
        <img
          src={currentPokemon?.sprites?.other['official-artwork'].front_default}
          alt={currentPokemon.name}
          className="h-[140px] w-[140px]"
        />
        <h3 className="text-[26px] capitalize text-white font-bold">
          {setIdNumber(currentPokemon?.id)} {currentPokemon.name}
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
              Weight: {currentPokemon?.weight / 100} kg
            </li>
            <li className="text-[15px]">
              Height: {currentPokemon?.height / 100} m
            </li>
          </ul>
        </div>
        <div
          className="w-full detail__group
         rounded-2xl  p-4"
        >
          <h3 className="font-bold text-lg mb-1">Base Stats</h3>
          <ul className="space-y-[10px]">
            {currentPokemon?.stats.map(({ base_stat, stat: { name } }) => (
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
        {/* Conditionally display the user assigned capture information if the pokemon's captured */}
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
                Captured on: {setDate(capturedDetails?.date)}
              </li>
              <li className="text-[15px] capitalize">
                Captured Level: {capturedDetails?.level}
              </li>
            </ul>
          </div>
        )}
        {/* Conditionally display the capture button only if the pokemon isn't captured */}
        {!isCaptured && (
          <button
            className="bg-[#EB5435] font-semibold text-lg text-white rounded-full w-full py-4 hover:scale-[1.01] transition ease-out duration-200"
            onClick={() => setModalIsOpen(true)}
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
