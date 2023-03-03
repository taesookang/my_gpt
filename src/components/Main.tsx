import React from 'react';

export const Main: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center items-center w-full flex-col overflow-y-scroll pb-5 text-white">
      <img
        src="/assets/bot.svg"
        className="w-28 aspect-square mb-4"
        alt="bot logos"
      />
      <h1 className="font-bold text-5xl tracking-wider leading-none">MyGPT</h1>
    </div>
  );
};

export default Main;
