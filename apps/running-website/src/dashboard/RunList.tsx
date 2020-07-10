import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "shared-data-layer/dist/index";
import { setSelectedRun } from "shared-data-layer/dist/runs/actions";
import RunListItem from "./RunListItem";

const mapStateToProps = (state: AppState) => ({
  runs: state.run.runs,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleClick: (id: number) => dispatch(setSelectedRun(id)),
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const RunList = ({ runs, handleClick }: Props) => {
  return (
    <Fragment>
      {runs.map((run) => (
        <RunListItem
          key={run.id}
          run={run}
          onClick={() => handleClick(run.id)}
        />
      ))}
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RunList);
