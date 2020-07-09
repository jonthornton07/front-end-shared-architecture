import React, { Fragment } from "react";
import { connect } from "react-redux";
import { AppState } from "shared-data-layer/dist/index";
import { Item } from "semantic-ui-react";
import RunListItem from "./RunListItem";

const mapStateToProps = (state: AppState) => ({
  runs: state.run.runs,
});

type Props = ReturnType<typeof mapStateToProps>;

const RunList = ({ runs }: Props) => {
  return (
    <Fragment>
      {runs.map((run) => (
        <RunListItem key={run.id} run={run} />
      ))}
    </Fragment>
  );
};

export default connect(mapStateToProps)(RunList);
