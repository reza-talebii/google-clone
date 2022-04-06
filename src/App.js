import React, { useState } from "react";
import { Navbar, Footer, Routes } from "./Components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
