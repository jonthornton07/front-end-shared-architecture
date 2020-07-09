import React from "react";
import { Grid } from "semantic-ui-react";
import RunList from "./RunList";

const RunDashboard = () => {
  //TODO: Handle loading
  return (
    <Grid>
      <Grid.Column width={10}>
        <RunList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h1>Something here</h1>
      </Grid.Column>
    </Grid>
  );
};

export default RunDashboard;
