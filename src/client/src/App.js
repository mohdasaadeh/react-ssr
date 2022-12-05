import React from "react";
import { Route, Switch } from "react-router-dom";
import "@babel/polyfill";

import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </Switch>
  );
};

export default App;
