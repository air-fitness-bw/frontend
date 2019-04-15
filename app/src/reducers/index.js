import { LOGIN_START, LOGIN_SUCCESS } from "../actions";

const initialState = {
  error: "",
  loggingIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loggingIn: false
      };
    default:
      return state;
  }
};

export default reducer;
