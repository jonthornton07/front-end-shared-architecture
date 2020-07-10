import { Run } from "shared-api-models/src/models";

export interface RunState {
  runs: Run[];
  selectedRunId: number | undefined;
}

export const ADD_RUN = "ADD_RUN";
export const EDIT_RUN = "EDIT_RUN";
export const REMOVE_RUN = "REMOVE_RUN";
export const SELECT_RUN = "SELECT_RUN";

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

interface SelectRunAction {
  type: typeof SELECT_RUN;
  id: number;
}

export type RunActions =
  | AddRunAction
  | EditRunAction
  | RemoveRunAction
  | SelectRunAction;
