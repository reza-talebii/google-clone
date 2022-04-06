import React from "react";

const ImageResult = ({ result }) => {
  return (
    <a
      href={result?.link?.href}
      className="sm:p-3 p-5"
      target="_blank"
      rel="noreferrer"
    >
      <img src={result?.image?.src} alt={result?.link?.title} loading="lazy" />
      <p className="w-36 break-words text-sm mt-2">{result?.link?.title}</p>
    </a>
  );
};

export default ImageResult;
