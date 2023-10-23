import React, { createContext } from 'react';
import { useImmer } from 'use-immer';

export const EventNavContext = createContext({});

const initialNavContext = {
  isRecruiting: false,
};

export function EventNav({ children }) {
  const [navState, updateNavState] = useImmer(initialNavContext);
  const handleIsRecruiting = () => {
    updateNavState((draft) => {
      draft.isRecruiting = !draft.isRecruiting;
    });
  };

  return (
    <EventNavContext.Provider value={{ navState, handleIsRecruiting }}>
      {children}
    </EventNavContext.Provider>
  );
}
