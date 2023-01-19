import * as t from "../Types";

const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
};

export default CounterReducer;
