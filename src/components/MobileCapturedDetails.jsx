import { setBg } from '../utils/setBg';

const MobileCapturedDetails = ({ pokemon }) => {
  return (
    <>
      <div
        className={`md:hidden p-4 col-span-1 md:col-span-2 flex items-center rounded-l-2xl md:rounded-2xl h-[100px] w-[100px] md:w-full ${setBg(
          pokemon?.types[0].type.name
        )}`}
      >
        <img
          src={pokemon?.sprites?.other['official-artwork'].front_default}
          alt={pokemon?.name}
          className="object-contain w-full h-auto md:h-[100px] md:w-[100px]"
        />
      </div>
      <div className="pl-8 sm:pl-0 pt-3 flex flex-col md:hidden col-span-3 space-y-1">
        <h3 className="capitalize font-bold">{pokemon?.nickname}</h3>
        <p className="text-sm">Captured on: {pokemon?.date}</p>
        <p className="text-sm">Captured Level: {pokemon?.level}</p>
      </div>
    </>
  );
};

export default MobileCapturedDetails;
