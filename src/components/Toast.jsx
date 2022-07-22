import { Transition } from '@headlessui/react';
import { Toaster, resolveValue } from 'react-hot-toast';

export const Toast = () => {
  return (
    <Toaster>
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-4 flex bg-[#EB5435] text-white font-bold rounded-2xl shadow-2xl"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <p className="px-2 capitalize text-lg">{resolveValue(t.message)}</p>
        </Transition>
      )}
    </Toaster>
  );
};
