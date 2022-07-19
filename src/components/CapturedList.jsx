import CapturedPokemon from './CapturedPokemon';

const CapturedList = () => {
  const capturedPokemons = JSON.parse(localStorage.getItem('captured'));

  return (
    <section className="py-8 flex flex-col gap-y-4 md:gap-y-8">
      {capturedPokemons.map((pokemon) => (
        <CapturedPokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </section>
  );
};

export default CapturedList;
