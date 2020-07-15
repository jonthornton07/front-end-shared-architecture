import { ADD_RUN, ADD_RUNS, EDIT_RUN, REMOVE_RUN, SELECT_RUN } from "./types";
import { Run } from "shared-api-models/src/models";

export const setSelectedRun = (id: number) => {
  return {
    type: SELECT_RUN,
    id,
  };
};

export const addRuns = (runs: Run[]) => {
  return {
    type: ADD_RUNS,
    runs,
  };
};

export const addRun = (run: Run) => {
  return {
    type: ADD_RUN,
    run,
  };
};

export const editRun = (run: Run) => {
  return {
    type: EDIT_RUN,
    run,
  };
};

export const removeRun = (id: number) => {
  return {
    type: REMOVE_RUN,
    id,
  };
};
