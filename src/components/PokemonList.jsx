import PokemonCard from './PokemonCard';
import { useRecoilValue } from 'recoil';
import { pokemonsState } from '../atoms/pokemonsAtom';
import { detailsState } from '../atoms/detailsAtom';

const PokemonList = () => {
  const pokemons = useRecoilValue(pokemonsState);
  const detailsVisible = useRecoilValue(detailsState);

  return (
    <div
      data-testid="pokemon-list"
      className={`${
        detailsVisible
          ? 'grid md:col-span-2 lg:col-span-2 xl:col-span-3 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 w-[98%] mr-auto px-4'
          : 'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-[95%] max-w-[1332px] mx-auto gap-4 md:gap-8'
      }`}
    >
      {/* Map through the pokemon fetched from the home component and return a PokemonCard component for each pokemon. Pass down the individual pokemon url to access the pokemon details */}
      {pokemons?.map(({ name, url }) => (
        <PokemonCard name={name} url={url} key={name} />
      ))}
    </div>
  );
};

export default PokemonList;
