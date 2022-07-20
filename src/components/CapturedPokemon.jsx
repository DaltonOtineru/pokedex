import { setBg } from '../utils/setBg';
import MobileCapturedDetails from './MobileCapturedDetails';
import { setDate } from '../utils/setDate';

const CapturedPokemon = ({ pokemon }) => {
  // const convertDate = (string) => {
  //   const date = new Date(string);
  //   const options = {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //   };
  //   return date.toLocaleString(undefined, options);
  // };

  return (
    <div className="sm:w-3/4 md:w-full mx-auto bg-white md:bg-transparent rounded-2xl grid grid-cols-4 md:grid-cols-5 captured__mobile capture__large h-[100px]">
      <MobileCapturedDetails pokemon={pokemon} />
      <div className="hidden md:flex col-span-2 items-center h-[100px] space-x-4 lg:space-x-6">
        <div
          className={`h-full w-[100px] rounded-2xl  ${setBg(
            pokemon?.types[0].type.name
          )} p-2`}
        >
          <img
            src={pokemon?.sprites?.other['official-artwork'].front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="flex font-bold text-xl lg:text-2xl capitalize">
            {' '}
            {pokemon?.id > 9 ? '#0' : '#00'}
            {pokemon?.id} {pokemon?.name}
          </h3>
          <ul className="poke__types inline-flex items-center">
            {pokemon?.types?.map(({ type: { name } }) => (
              <li
                key={name}
                className="text-[15px] capitalize text-[#828282] font-light text-lg lg:text-xl"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1 hidden md:flex text-left items-center ">
        {pokemon.nickname ? (
          <h3 className="pl-2 font-medium text-lg xl:text-2xl capitalize">
            {pokemon?.nickname}
          </h3>
        ) : (
          <h3 className="pl-2 font-medium text-lg capitalize nickname__none xl:text-2xl">
            none
          </h3>
        )}
      </div>
      <div className="col-span-1 hidden md:flex text-left items-center ">
        <h3 className=" font-medium text-lg capitalize xl:text-2xl">
          {setDate(pokemon?.date)}
        </h3>
      </div>
      <div className="col-span-1 hidden md:flex justify-start items-center">
        <h3 className="pl-14 font-medium text-lg capitalize xl:text-2xl">
          {pokemon?.level}
        </h3>
      </div>
    </div>
  );
};

export default CapturedPokemon;
