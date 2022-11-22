import React from "react";
import { Route } from "react-router-dom";

import { Home } from "./layouts/Home";

const App = () => {
  return <Route exact path="/" component={Home} />;
};

export default App;
