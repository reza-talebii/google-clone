import React, { useState } from "react";
import store from "./store";

const BASE_URL = "https://google-search3.p.rapidapi.com/api/v1";

const ResultProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTherm, setSearchTherm] = useState("Elon Musk");

  //fetch data in api
  const getResults = async (type) => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(`${BASE_URL}${type}`, {
        method: "GET",
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "EU",
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
          "X-RapidAPI-Key":
            "438453db08msh13e95ef36bcb8fbp104745jsnc8f8ac4aa394",
        },
      });
      const data = await res.json();

      //----
      type.includes("/news")
        ? setResult(data.entries)
        : type.includes("/images")
        ? setResult(data.image_results)
        : setResult(data);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <store.Provider
      value={{
        result,
        error,
        loading,
        getResults,
        searchTherm,
        setSearchTherm,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default ResultProvider;
