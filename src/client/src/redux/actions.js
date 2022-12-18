import { FETCH_USERS, CHECK_USER, FETCH_ADMINS } from "./types";

export const fetchUsers = () => async (dispatch, getState, api) => {
  const response = await api.get("/users");

  dispatch({ type: FETCH_USERS, payload: response.data });
};

export const checkUser = () => async (dispatch, getState, api) => {
  const response = await api.get("/current_user");

  dispatch({ type: CHECK_USER, payload: response.data });
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const response = await api.get("/admins");

  dispatch({ type: FETCH_ADMINS, payload: response.data });
};
