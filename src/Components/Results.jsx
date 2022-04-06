import React, { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../Context/store";

import { Loading, SearchResult, Error } from "./";

const styles = {
  searchContainer: "flex flex-wrap justify-between space-y-6 sm:px-56",
  imagesContainer: "flex flex-wrap justify-center items-center",
};

const Results = () => {
  const { pathname } = useLocation();
  const { result, error, loading, getResults } = useResultContext();

  useEffect(() => {
    // getResults("search/q=elon+musk");
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  switch (pathname) {
    case "/search":
      return (
        <div className={styles.searchContainer}>
          {result?.results?.map((result, i) => (
            <SearchResult result={result} key={i} />
          ))}
        </div>
      );
      break;

    case "/images":
      return <div className={styles.imagesContainer}>{result.results}</div>;
      break;

    case "/news":
      return <div className={styles.searchContainer}></div>;
      break;

    case "/videos":
      return <div className={styles.searchContainer}></div>;
      break;

    default:
      break;
  }
};

export default Results;
