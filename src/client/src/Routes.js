import "@babel/polyfill";

import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
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
      {
        ...NotFoundPage,
        path: "*",
      },
    ],
  },
];

export default Routes;
