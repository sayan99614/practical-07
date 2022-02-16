import { initialState } from "./initialState";
export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "SETUSER":
      return {
        ...state,
        user: action.payload,
      };
    case "REMOVEUSER":
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};
