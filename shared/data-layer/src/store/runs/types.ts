export interface Run {
  id: number;
  paceInMS: number;
  distance: number;
  timeInMS: number;
  date: string;
  name: string;
}

export interface RunState {
  runs: Run[];
}

export const ADD_RUN = "ADD_RUN";
export const EDIT_RUN = "EDIT_RUN";
export const REMOVE_RUN = "REMOVE_RUN";

interface AddRunAction {
  type: typeof ADD_RUN;
  run: Run;
}

interface EditRunAction {
  type: typeof EDIT_RUN;
  run: Run;
}

interface RemoveRunAction {
  type: typeof REMOVE_RUN;
  id: number;
}

export type RunActions = AddRunAction | EditRunAction | RemoveRunAction;
