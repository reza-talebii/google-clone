import React from "react";

import { Link } from "react-router-dom";

//tailwindcss styles
const styles = {
  wrapper:
    "p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200",
  navStyle: "flex justify-between items-center space-x-5 w-screen",
  googleLink:
    "text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900",
};

const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <section className={styles.wrapper}>
      <nav className={styles.navStyle}>
        <Link to="/">
          <p className={styles.googleLink}>Google</p>
        </Link>

        <button onClick={() => setDarkMode(() => !darkMode)}>
          {darkMode ? "Light" : "Dark"}
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
