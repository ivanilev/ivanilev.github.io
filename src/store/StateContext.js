import React from "react";
import { createContext, useContext, useState } from "react";
import { languages } from "../languages/languages";

export const Context = createContext();

export const StateContext = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].image);

  return (
    <Context.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
