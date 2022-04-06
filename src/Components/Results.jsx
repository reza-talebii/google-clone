import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../Context/store";

import { Loading, SearchResult, Error, ImageResult, NewsResult } from "./";

const styles = {
  searchContainer: "flex flex-wrap justify-between space-y-6 sm:px-56",
  imagesContainer: "flex flex-wrap justify-center items-center",
  newContainer:
    "flex flex-wrap justify-between space-y-6 sm:px-56 items-center",
};

const Results = () => {
  const { pathname } = useLocation();
  const { result, error, loading, getResults } = useResultContext();

  useEffect(() => {
    // getResults(`${pathname}/q=Elon Musk&num=20`);
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  console.log(result);

  switch (pathname) {
    case "/search":
      return (
        <div className={styles.searchContainer}>
          {result?.map((result, i) => (
            <SearchResult result={result} key={i} />
          ))}
        </div>
      );
      break;

    case "/image":
      return (
        <div className={styles.imagesContainer}>
          {result?.map((res, i) => (
            <ImageResult result={res} key={i} />
          ))}
        </div>
      );
      break;

    case "/news":
      return (
        <div className={styles.newContainer}>
          {result?.map((result, i) => (
            <NewsResult result={result} key={i} />
          ))}
        </div>
      );
      break;

    case "/video":
      return (
        <div className="flex flex-wrap justify-center">
          {result?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer
                url={video.additional_links[0].href}
                controls
                width="355px"
                height="200px"
              />
            </div>
          ))}
        </div>
      );
      break;

    default:
      <p>not found pa2ge</p>;
      break;
  }
};

export default Results;
