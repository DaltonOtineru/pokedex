import { Link } from 'react-router-dom';
import pokeball from '../assets/pokeball.svg';

const MobileCapturedButton = () => {
  return (
    <Link to="/capturedpokemons">
      <div className="fixed bottom-2 right-3 flex justify-center items-center md:hidden p-0 bg-white rounded-full shadow-black shadow-2xl">
        <img src={pokeball} alt="Pokeball" className="h-16 w-16" />
      </div>
    </Link>
  );
};

export default MobileCapturedButton;
