import "@babel/polyfill";

import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";

const App = [
  {
    ...HomePage,
    path: "/",
    exact: true,
  },
  {
    ...UsersPage,
    path: "/users",
  },
];

export default App;
