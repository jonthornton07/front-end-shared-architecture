import { Run, ADD_RUN, EDIT_RUN, REMOVE_RUN } from "./types";

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
