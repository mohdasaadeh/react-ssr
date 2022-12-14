import React from "react";
import "@babel/polyfill";
import { renderRoutes } from "react-router-config";

import { checkUser } from "./redux/actions";
import Navbar from "./layouts/Navbar";

const App = ({ route }) => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "20px" }}>{renderRoutes(route.routes)}</div>
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(checkUser()),
};
