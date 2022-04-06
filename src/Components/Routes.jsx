import React from "react";
import { Routes as RouteWarper, Route, Redirect } from "react-router-dom";

const Routes = () => {
  return (
    <section className="p-4">
      <RouteWarper>
        <Route path="/">
          <Redirect to="/search" />
        </Route>

        <Route path={["/search", "/images", "/news"]} element={<Result />} />
      </RouteWarper>
    </section>
  );
};

export default Routes;
