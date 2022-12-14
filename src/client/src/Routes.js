import "@babel/polyfill";

import App from "./App";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";

const Routes = [
  {
    ...App,
    path: "/",
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...UsersPage,
        path: "/users",
      },
    ],
  },
];

export default Routes;
