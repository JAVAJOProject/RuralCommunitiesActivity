import React, { useState, createContext } from 'react';

export const TopMenuPosContext = createContext();

export default function TopMenuPos({ children }) {
  const [topMenuPos, setTopMenuPos] = useState(0);
  return (
    <TopMenuPosContext.Provider value={{ topMenuPos, setTopMenuPos }}>
      {children}
    </TopMenuPosContext.Provider>
  );
}
