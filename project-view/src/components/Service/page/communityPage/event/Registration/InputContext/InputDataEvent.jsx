import React, { createContext } from 'react';

export const InputDataContext = createContext({});

const emptyDataForm = {
  eventName: null,
  eventRecruitTypeId: null,
  eventContent: null,
  eventRecruitStartDate: null,
  eventRecruitEndDate: null,
  eventStartDate: null,
  eventEndDate: null,
  eventMaxPeople: null,
  eventAddr: null,
  sigunguId: null,
};
const emptyFiles = [];

export function InputDataEvent({ children }) {
  const [inputDataJson, updateInputDataJson] = useImmer(emptyDataForm);
  const [inputDataFiles, updateDataFiles] = useImmer(emptyFiles);

  return (
    <InputDataContext.Provider
      value={{
        inputDataJson,
        updateInputDataJson,
        inputDataFiles,
        updateDataFiles,
      }}
    >
      {children}
    </InputDataContext.Provider>
  );
}
