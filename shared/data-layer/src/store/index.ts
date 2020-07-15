import { runReducer } from "./runs/reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  run: runReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppState = ReturnType<typeof store.getState>;
