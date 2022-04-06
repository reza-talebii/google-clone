import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../Context/store";

import { Loading } from "./";

const Results = () => {
  const { pathname } = useLocation();
  const { result, error, loading, getResultsts } = useResultContext();

  if (true) return <Loading />;

  return <div>Results</div>;
};

export default Results;
