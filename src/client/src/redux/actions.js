import axios from "axios";

import { FETCH_USERS } from "./types";

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get("https://react-ssr-api.herokuapp.com/users");

  dispatch({ type: FETCH_USERS, payload: response.data });
};
