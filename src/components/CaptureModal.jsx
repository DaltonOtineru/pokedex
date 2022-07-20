import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPokemonState } from '../atoms/currentPokemonAtom';
import { modalState } from '../atoms/modalAtom';

const CaptureModal = () => {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalState);
  const currentPokemon = useRecoilValue(currentPokemonState);

  const [capturedPokemon, setCapturedPokemon] = useState(() => {
    const captured = JSON.parse(localStorage.getItem('captured'));
    return captured || [];
  });

  const [nickname, setNickname] = useState('');
  const [date, setDate] = useState('');
  const [level, setLevel] = useState('');

  const handleCapture = (e) => {
    e.preventDefault();
    const inputData = {
      nickname: nickname,
      date: date,
      level: level,
    };
    const updatedCapture = Object.assign({}, currentPokemon, inputData);
    capturedPokemon.push(updatedCapture);
    localStorage.setItem('captured', JSON.stringify(capturedPokemon));

    setNickname('');
    setDate('');
    setLevel('');
    setModalIsOpen(false);
  };

  return (
    <Transition
      show={modalIsOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
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
            <Dialog.Panel className="mx-auto rounded-2xl bg-white transition duration-300 ease-out w-[348px] h-[334px] py-8 px-6 -mt-16">
              <form>
                <h3 className="font-bold text-[28px] whitespace-nowrap mb-4 capitalize">
                  Capturing {currentPokemon?.name}
                </h3>
                <input
                  className="capture__input"
                  placeholder="Nickname (optional)"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <input
                  className="capture__input"
                  placeholder="Captured Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  className="capture__input"
                  placeholder="Captured Level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                />
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
