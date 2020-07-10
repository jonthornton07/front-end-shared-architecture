import { RunState, RunActions, ADD_RUN, REMOVE_RUN, SELECT_RUN } from "./types";

const initialState: RunState = {
  runs: [
    {
      id: 0,
      paceInMS: 100,
      distance: 5.3,
      timeInMS: 100,
      date: Date(),
      name: "Run",
    },
  ],
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
