import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <main className="flex pt-4 pb-8 md:py-16">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[95%] w-[1332px] mx-auto gap-4 md:gap-8 lg:gap-8">
        {pokemons?.map(({ name, url }) => (
          <PokemonCard name={name} url={url} key={name} />
        ))}
      </div>
    </main>
  );
};

export default PokemonList;
