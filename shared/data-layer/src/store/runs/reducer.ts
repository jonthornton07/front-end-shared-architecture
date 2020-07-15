import {
  RunState,
  RunActions,
  ADD_RUN,
  ADD_RUNS,
  REMOVE_RUN,
  SELECT_RUN,
} from "./types";

const initialState: RunState = {
  runs: [],
  selectedRunId: undefined,
};

export const runReducer = (
  state = initialState,
  action: RunActions
): RunState => {
  switch (action.type) {
    case ADD_RUN:
      const newRun = {
        ...action.run,
        id: state.runs.length + 1,
      };
      return {
        ...state,
        runs: [...state.runs, newRun],
      };
    case ADD_RUNS: {
      return {
        ...state,
        runs: action.runs,
      };
    }
    case REMOVE_RUN:
      return {
        ...state,
        runs: state.runs.filter((run) => run.id !== action.id),
      };
    case SELECT_RUN:
      return {
        ...state,
        selectedRunId: action.id,
      };
    //TODO: Hand EDIT_RUN
    default:
      return state;
  }
};
