import React from "react";
import { AppState } from "../store";
import { connect } from "react-redux";

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
