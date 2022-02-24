import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
