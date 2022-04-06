import React from "react";

const NotFound = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <h1 style={{ fontSize: "2rem" }}>{message}</h1>
    </div>
  );
};

export default NotFound;
