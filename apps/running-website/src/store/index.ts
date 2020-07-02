import { runReducer } from "./runs/reducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  run: runReducer,
});

export const store = createStore(rootReducer);
export type AppState = ReturnType<typeof rootReducer>;
