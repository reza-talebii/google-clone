import React, { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../Context/store";

import { Loading, SearchResult } from "./";

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
      <SearchResult result={result} />;
      break;

    default:
      break;
  }
};

export default Results;
