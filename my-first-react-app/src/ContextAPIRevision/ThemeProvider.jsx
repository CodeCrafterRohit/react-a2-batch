import React, { createContext, useContext, useState } from "react";

//! Context for global theme
export let GlobalThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  //! state for theme
  let [theme, setTheme] = useState(false);

  //! toggleTheme
  let toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <GlobalThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </GlobalThemeContext.Provider>
  );
};

export let useTheme = () => {
  return useContext(GlobalThemeContext);
};

export default ThemeProvider;
