import React from "react";
import { Routes as RouteWarper, Route, Navigate } from "react-router-dom";

import { Results } from "./";

const Routes = () => {
  return (
    <section className="p-4">
      <RouteWarper>
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/video" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="*" element={<Results />} />
      </RouteWarper>
    </section>
  );
};

export default Routes;
