import React from "react";
import { Grid } from "semantic-ui-react";
import RunList from "./RunList";
import RunDetailsForm from "../details/RunDetailsForm";

const RunDashboard = () => {
  //TODO: Handle loading
  return (
    <Grid>
      <Grid.Column width={10}>
        <RunList />
      </Grid.Column>
      <Grid.Column width={6}>
        <RunDetailsForm />
      </Grid.Column>
    </Grid>
  );
};

export default RunDashboard;
