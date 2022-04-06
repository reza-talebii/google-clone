import React from "react";

const NewsResult = ({ result }) => {
  const { link, title, source } = result;

  return (
    <div className="md:w-2/5 w-full">
      <a
        href={link?.[0].href}
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        <p className="text-lg  dark:text-blue-300 text-blue-700">{title}</p>

        <div className="flex gap-4">
          <a href={source?.href} target="_blank" rel="noreferrer">
            {source?.href}
          </a>
        </div>
      </a>
    </div>
  );
};

export default NewsResult;
