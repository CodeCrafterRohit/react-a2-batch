import React from "react";
import { useTheme } from "./ThemeProvider";

const HomePage = () => {
  let { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`w-full h-screen  flex flex-col items-center ${theme === true ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <h1 className=" p-4 text-center mx-auto">HomePage</h1>
      <h2>Theme: {theme === true ? "light" : "dark"}</h2>
      <button onClick={toggleTheme} className=" p-2 rounded">
        {theme === true ? "Switch to Dark Theme" : "Switch to Light Theme"}
      </button>
    </div>
  );
};

export default HomePage;
