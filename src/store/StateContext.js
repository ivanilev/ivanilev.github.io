import React from "react";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [language, setLanguage] = useState("english");
  return (
    <Context.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
