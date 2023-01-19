import * as t from "../Types";

export const addUserInfo = (user) => {
  return { type: t.ADD_USER_INFO, payload: user };
};

export const getUserInfo = (user) => {
  return { type: t.GET_USER_INFO, payload: user };
};
