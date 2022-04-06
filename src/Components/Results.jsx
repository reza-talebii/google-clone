import React, { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../Context/store";

import { Loading, SearchResult } from "./";

const styles = {
  searchContainer: "flex flex-wrap justify-between space-y-6 sm:px-56",
};

const Results = () => {
  const { pathname } = useLocation();
  const { result, error, loading, getResults } = useResultContext();

  useEffect(() => {
    // getResults("search/q=elon+musk");
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

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

    default:
      break;
  }
};

export default Results;
