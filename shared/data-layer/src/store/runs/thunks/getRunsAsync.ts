import { addRuns } from "./../actions";
import { getRuns } from "shared-api-layer/dist/runs/getRuns";
import { AnyAction } from "redux";
import { AppState } from "../../index";
import { ThunkAction } from "redux-thunk";

export type RunThunk<R> = ThunkAction<R, AppState, unknown, AnyAction>;

export const getRunsAsync = (): RunThunk<Promise<void>> => async (
  dispatch,
  getState
) => {
  let runs = getState().run.runs;
  if (runs.length === 0) {
    runs = await getRuns();
  }
  dispatch(addRuns(runs));
};
