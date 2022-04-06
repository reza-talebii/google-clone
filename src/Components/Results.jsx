import React, { useEffect } from "react";

import { useResultContext } from "../Context/store";

const Results = () => {
  const { getResults } = useResultContext();

  useEffect(() => {
    getResults("search/q=elon+musk");
  }, [getResults]);

  return <div>Results</div>;
};

export default Results;
