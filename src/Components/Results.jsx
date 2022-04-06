import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../Context/store";

const Results = () => {
  const { pathname } = useLocation();
  const { er, getResults } = useResultContext();

  return <div>Results</div>;
};

export default Results;
