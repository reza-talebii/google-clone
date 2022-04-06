import React from "react";

const ImageResult = ({ result }) => {
  const { image, link } = result;

  return (
    <a
      href={link?.href}
      className="sm:p-3 p-5"
      target="_blank"
      rel="noreferrer"
    >
      <img src={image?.src} alt={link?.title} loading="lazy" />
      <p className="w-36 break-words text-sm mt-2">{link?.title}</p>
    </a>
  );
};

export default ImageResult;
