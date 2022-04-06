import React from "react";

const NewsResult = ({ result }) => {
  return (
    <div className="md:w-2/5 w-full">
      <a
        href={result?.link?.[0].href}
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        <p className="text-lg  dark:text-blue-300 text-blue-700">
          {result?.title}
        </p>

        <div className="flex gap-4">
          <a href={result?.source?.href} target="_blank" rel="noreferrer">
            {result?.source?.href}
          </a>
        </div>
      </a>
    </div>
  );
};

export default NewsResult;
