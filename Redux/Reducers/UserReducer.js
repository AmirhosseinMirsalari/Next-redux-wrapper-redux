import * as t from "../Types";

const initialState = {
  userClient: ["user 1", "user 2"],
  userSsr: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_USER_INFO: {
      return {
        ...state,
        userClient: [...state.userClient, action.payload],
      };
    }
    case t.GET_USER_INFO: {
      return {
        ...state,
        userSsr: action.payload,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
