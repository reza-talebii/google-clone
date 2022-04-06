import React from "react";
import { Routes as RouteWarper, Route, Navigate } from "react-router-dom";

import { Results, NotFound } from "./";

const Routes = () => {
  return (
    <section className="p-4" style={{ height: "51vh" }}>
      <RouteWarper>
        <Route path="*" element={<NotFound message="Not found page 404" />} />
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/video" element={<Results />} />
        <Route path="/news" element={<Results />} />
      </RouteWarper>
    </section>
  );
};

export default Routes;
