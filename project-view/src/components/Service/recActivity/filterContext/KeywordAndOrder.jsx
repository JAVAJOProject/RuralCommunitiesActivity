import React, { createContext } from "react";
import { useImmer } from "use-immer";

export const KeywordAndOrderContext = createContext({});
const initialState = { keyword: "", order: "date" };

export default function KeywordAndOrder({ children }) {
  const [filterState, updateFilterState] = useImmer(initialState);
  const handleKeyword = (keyword) => {
    updateFilterState((draft) => {
      draft.keyword = keyword;
    });
  };
  const handleOrder = (order) => {
    updateFilterState((draft) => {
      draft.order = order;
    });
  };

  return (
    <KeywordAndOrderContext.Provider
      value={{ filterState, handleKeyword, handleOrder }}
    >
      {children}
    </KeywordAndOrderContext.Provider>
  );
}
