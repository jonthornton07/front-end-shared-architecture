import { createSelector } from "reselect";
import { AppState } from "..";
import { Run } from "shared-api-models/src/models";

const getRuns = (state: AppState) => state.run.runs;
const getSelectedRunId = (state: AppState) => state.run.selectedRunId;

export const getSelectedRun = createSelector(
  getRuns,
  getSelectedRunId,
  (runs, id) => runs.filter((run) => run.id === id)[0] ?? null
);
