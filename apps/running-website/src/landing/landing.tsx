import React from "react";
import { connect } from "react-redux";
import { AppState } from "shared-data-layer/dist/index";

const mapStateToProps = (state: AppState) => ({
  runs: state.run.runs,
});

type Props = ReturnType<typeof mapStateToProps>;

const Landing = ({ runs }: Props) => (
  <div>
    <ul>
      {runs.map((run) => (
        <li>{run.name}</li>
      ))}
    </ul>
  </div>
);

export default connect(mapStateToProps)(Landing);
