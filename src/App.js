import React, { useState } from "react";
import { Navbar, Footer, Routes } from "./Components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return <div className={darkMode ? "dark-mode" : ""}></div>;
};

export default App;
