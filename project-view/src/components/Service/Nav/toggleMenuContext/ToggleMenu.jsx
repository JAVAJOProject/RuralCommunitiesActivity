import React, { createContext } from 'react';
import { useImmer } from 'use-immer';

export const ToggleContext = createContext({});

const initialVisible = {
  visible: false,
  pointInTop: false,
  pointInMiddle: false,
};
const initialHoverState = {
  hoverState: 0,
  hoverStateTop: 0,
  hoverStateMiddle: 0,
};

export function ToggleMenu({ children }) {
  const [visibleAll, updateVisibleAll] = useImmer(initialVisible);
  const [hoverStateAll, updateHoverStateAll] = useImmer(initialHoverState);
  const hoverStyle = 'toggleMenu';

  return (
    <ToggleContext.Provider
      value={{
        visibleAll,
        updateVisibleAll,
        hoverStateAll,
        updateHoverStateAll,
        hoverStyle,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}
