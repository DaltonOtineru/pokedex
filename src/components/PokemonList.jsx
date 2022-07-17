import PokemonCard from './PokemonCard';
import { useRecoilValue } from 'recoil';
import { pokemonsState } from '../atoms/pokemonsAtom';

const PokemonList = ({ detailsPage }) => {
  const pokemons = useRecoilValue(pokemonsState);
  return (
    <div
      className={`${
        detailsPage
          ? 'grid md:col-span-1 lg:col-span-2 xl:col-span-3 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pl-6 max-w-[1300px] w-90%'
          : 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[95%] w-[1332px] mx-auto gap-4 md:gap-8'
      }`}
    >
      {pokemons?.map(({ name, url }) => (
        <PokemonCard name={name} url={url} key={name} />
      ))}
    </div>
  );
};

export default PokemonList;
