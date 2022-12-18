import "@babel/polyfill";

import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsPage from "./pages/AdminsPage";
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
        ...AdminsPage,
        path: "/admins",
      },
      {
        ...NotFoundPage,
        path: "*",
      },
    ],
  },
];

export default Routes;
