import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../Context/store";

import {
  Loading,
  SearchResult,
  Error,
  ImageResult,
  NewsResult,
  NotFound,
} from "./";

const styles = {
  searchContainer: "flex flex-wrap justify-between space-y-6 sm:px-56",
  imagesContainer: "flex flex-wrap justify-center items-center",
  newContainer:
    "flex flex-wrap justify-between space-y-6 sm:px-56 items-center",
};

const Results = () => {
  const { pathname } = useLocation();
  const { result, error, loading, getResults, searchTherm } =
    useResultContext();

  console.log(searchTherm);

  useEffect(() => {
    if (searchTherm !== "") {
      getResults(`${pathname}/q=${searchTherm}`);
    }
  }, [searchTherm, pathname]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (searchTherm === "") return <NotFound message={"you not search yet..."} />;

  switch (pathname) {
    case "/search":
      return (
        <div className={styles.searchContainer}>
          {result.results?.length !== 0 &&
            result?.results?.map((result, i) => (
              <SearchResult result={result} key={i} />
            ))}
        </div>
      );
      break;

    case "/image":
      return (
        <div className={styles.imagesContainer}>
          {result.image_results?.length !== 0 &&
            result?.map((res, i) => <ImageResult result={res} key={i} />)}
        </div>
      );
      break;

    case "/news":
      return (
        <div className={styles.newContainer}>
          {result?.["entries"] &&
            result?.map((result, i) => <NewsResult result={result} key={i} />)}
        </div>
      );
      break;

    case "/video":
      return (
        <div className="flex flex-wrap justify-center">
          {result?.results?.length !== 0 &&
            result?.results?.map((video, index) => (
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
