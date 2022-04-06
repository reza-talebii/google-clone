import React from "react";

import { Link } from "react-router-dom";

const styles = {
  wrapper:
    "p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200",
  navStyle: "flex justify-between items-center space-x-5 w-screen",
};

const Navbar = () => {
  return (
    <section className={styles.wrapper}>
      <nav className={styles.navStyle}>
        <Link to="/">home</Link>
      </nav>
    </section>
  );
};

export default Navbar;
