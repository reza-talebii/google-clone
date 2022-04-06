import React from "react";

const SearchResult = ({ result }) => {
  return (
    <div className="md:w-2/5 w-full">
      <a href={result?.link} target="_blank" rel="noreferrer">
        <p className="text-sm">
          {result?.link.length > 30
            ? result?.link.substring(0, 30)
            : result?.link}
        </p>
        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
          {result?.title}
        </p>
      </a>
    </div>
  );
};

export default SearchResult;
