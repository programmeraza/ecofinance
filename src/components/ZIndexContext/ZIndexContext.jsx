import React, { createContext, useState, useContext } from 'react';

const ZIndexContext = createContext();

export const ZIndexProvider = ({ children }) => {
  const [zIndex, setZIndex] = useState(1);

  const lowerZIndex = () => setZIndex(0);
  const resetZIndex = () => setZIndex(1);

  return (
    <ZIndexContext.Provider value={{ zIndex, lowerZIndex, resetZIndex }}>
      {children}
    </ZIndexContext.Provider>
  );
};

export const useZIndex = () => useContext(ZIndexContext);