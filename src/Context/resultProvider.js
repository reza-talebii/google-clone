import React, { useState } from "react";
import store from "./store";

const ResultProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <store.Provider value={{ result, error, loading }}>
      {children}
    </store.Provider>
  );
};

export default ResultProvider;
