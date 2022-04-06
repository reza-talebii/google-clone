import React, { useEffect, useState } from "react";
import store from "./store";

const BASE_URL = "https://google-search3.p.rapidapi.com/api/v1";

const ResultProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //fetch data in api
  const getResults = async (type) => {
    setLoading(true);
    setError(true);

    const res = await fetch(`${BASE_URL}/${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "449ece1bedmsh44664fa38cb935ap17810ejsn3d3db2fe6ce0",
      },
    });
    const data = await res.json();

    res.ok ? setResult(data) : setError(res.statusText);

    setLoading(false);
  };

  return (
    <store.Provider value={{ result, error, loading, getResults }}>
      {children}
    </store.Provider>
  );
};

export default ResultProvider;
