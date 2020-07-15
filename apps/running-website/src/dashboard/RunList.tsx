import React, { Fragment, useEffect } from "react";
import { connect, ResolveThunks } from "react-redux";
import { AppState } from "shared-data-layer/dist/index";
import { setSelectedRun } from "shared-data-layer/dist/runs/actions";
import { getRunsAsync } from "shared-data-layer/dist/runs/thunks/getRunsAsync";
import RunListItem from "./RunListItem";

const mapStateToProps = (state: AppState) => ({
  runs: state.run.runs,
});

const mapDispatchToProps = {
  getRunsAsync,
  setSelectedRun,
};

type ScreenProps = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps>;

const RunList = ({ runs, getRunsAsync, setSelectedRun }: ScreenProps) => {
  useEffect(() => {
    getRunsAsync();
  }, [getRunsAsync]);

  return (
    <Fragment>
      {runs.map((run) => (
        <RunListItem
          key={run.id}
          run={run}
          onClick={() => {
            setSelectedRun(run.id);
          }}
        />
      ))}
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RunList);
