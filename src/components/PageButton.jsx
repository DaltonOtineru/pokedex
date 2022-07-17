import React from 'react';

const PageButton = ({ event, Icon }) => {
  return (
    <button
      onClick={event}
      className="rounded-lg px-4 py-3 bg-[#EB5435] text-white text-lg font-bold flex items-center hover:scale-[1.03] transition duration-200 ease-out"
    >
      <Icon className="h-8" />
    </button>
  );
};

export default PageButton;
