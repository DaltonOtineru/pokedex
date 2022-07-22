import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPokemonState } from '../atoms/currentPokemonAtom';
import { modalState } from '../atoms/modalAtom';

const CaptureModal = () => {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalState);
  const currentPokemon = useRecoilValue(currentPokemonState);
  const [formError, setFormError] = useState(false);

  // State variable to hold the captured pokemon. Get the array from localStorage. If there is no captured pokemon, set the state as an empty array
  const [capturedPokemon, setCapturedPokemon] = useState(() => {
    const captured = JSON.parse(localStorage.getItem('captured'));
    return captured || [];
  });

  // State values to contain the user input data
  const [nickname, setNickname] = useState('');
  const [date, setDate] = useState('');
  const [level, setLevel] = useState('');

  // Triggered when user clicks capture button. If there is no input data in the capture date or level the funtion won't run. If there is, it creates a new object with the user input data, then creates another new object and combines the input data object with the current pokemon object, into this new object. Finally, push this new object to the captured pokemon array and update the localStorage with the new pokemon.
  const handleCapture = (e) => {
    e.preventDefault();
    if (!date.trim() && !level.trim()) {
      setFormError(true);
      return;
    }
    const inputData = {
      nickname: nickname,
      date: date,
      level: level,
    };
    const updatedCapture = Object.assign({}, currentPokemon, inputData);
    capturedPokemon.push(updatedCapture);
    localStorage.setItem('captured', JSON.stringify(capturedPokemon));

    const fireToast = () => {
      toast(`You captured ${nickname ? nickname : currentPokemon?.name}`);
    };
    fireToast();
    setNickname('');
    setDate('');
    setLevel('');
    setModalIsOpen(false);
  };

  return (
    <Transition show={modalIsOpen} as={Fragment}>
      <Dialog
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        className="relative z-50 h-scren w-screen"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay
            className="fixed inset-0 bg-black/60 transition-opacity"
            aria-hidden="true"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel
              className={`mx-auto rounded-2xl bg-white transition duration-300 ease-out w-[348px] h-[334px] py-8 px-6 -mt-16 ${
                formError && 'h-[345px]'
              }`}
            >
              <form>
                <h3 className="font-bold text-[28px] whitespace-nowrap mb-4 capitalize">
                  Capturing {currentPokemon?.name}
                </h3>
                <input
                  type="text"
                  className="capture__input"
                  placeholder="Nickname (optional)"
                  value={nickname}
                  onFocus={() => setFormError(false)}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <input
                  type="text"
                  className="capture__input"
                  placeholder="Captured Date"
                  value={date}
                  onFocus={() => setFormError(false)}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="text"
                  className={`capture__input ${formError && 'mb-0'}`}
                  placeholder="Captured Level"
                  value={level}
                  onFocus={() => setFormError(false)}
                  onChange={(e) => setLevel(e.target.value)}
                />
                {formError && (
                  <span className="text-xs text-[#EB5435] font-medium mt-1">
                    Captured date and level are required*
                  </span>
                )}

                <button
                  className="bg-[#EB5435] text-2xl text-white rounded-full w-full py-[.65rem] hover:scale-[1.01] transition ease-out duration-200  font-semibold mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCapture(e);
                  }}
                >
                  Capture
                </button>
              </form>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default CaptureModal;
