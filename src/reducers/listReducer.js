import { initialState } from "./initialState";

export const listReducer = (state = initialState.list, action) => {
  switch (action.type) {
    case "SETLIST":
      return action.payload;
    case "DELETEUSERLIST":
      const updatedlist = state.filter((item) => item.id !== action.payload);
      return updatedlist;
    default:
      return state;
  }
};
