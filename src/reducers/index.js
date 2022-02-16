import { combineReducers } from "redux";
import { showReducer } from "./showReducer";
import { userReducer } from "./userReducer";
import { listReducer } from "./listReducer";
import { fetchReducer } from "./userFetchReducer";
export const rootReducer = combineReducers({
  showReducer,
  userReducer,
  listReducer,
  users: fetchReducer,
});
