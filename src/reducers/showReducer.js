import { initialState } from "./initialState";
export const showReducer = (state = initialState.card, action) => {
  switch (action.type) {
    case "SHOWCARD":
      return {
        ...state,
        card: action.payload,
      };
    case "HIDECARD":
      return {
        ...state,
        card: action.payload,
      };
    default:
      return state;
  }
};
