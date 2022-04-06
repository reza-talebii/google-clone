import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/image", text: "📸 Images" },
  { url: "/video", text: "📺 Videos" },
];

const Links = () => {
  return (
    <ul className="flex justify-center items-center mt-4 w-full">
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
              : "px-5"
          }
        >
          {text}
        </NavLink>
      ))}
    </ul>
  );
};

export default Links;
