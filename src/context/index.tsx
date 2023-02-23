/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from 'react';

interface IGlobalContext {
  isAnswering: boolean;
  setIsAnswering: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactNode;
}

const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [isAnswering, setIsAnswering] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ isAnswering, setIsAnswering }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
