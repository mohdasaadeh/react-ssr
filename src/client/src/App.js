import "@babel/polyfill";

import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import { loadData } from "./pages/UsersPage";

const App = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/users",
    component: UsersPage,
    loadData,
  },
];

export default App;
