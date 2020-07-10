import React, { FormEvent } from "react";
import { Segment, Form, Button, Grid, GridColumn } from "semantic-ui-react";
import { connect } from "react-redux";
import { AppState } from "shared-data-layer/dist/index";
import { getSelectedRun } from "shared-data-layer/dist/runs/selectors";

const mapStateToProps = (state: AppState) => ({
  selectedRun: getSelectedRun(state),
});

type Props = ReturnType<typeof mapStateToProps>;

const RunDetailsForm = ({ selectedRun }: Props) => {
  //   const handleInputChange = (
  //     event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     const { name, value } = event.currentTarget;
  //     setActivity({ ...activity, [name]: value });
  //   };

  //   const handleCancelClicked = () => {
  //     activityStore.setActivity(null);
  //     activityStore.setSubmittingActivity(false);
  //     history.push("/activities");
  //   };

  const handleInputChange = (
    vent: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {};

  const submit = () => {};

  if (selectedRun === null) {
    return null;
  }

  return (
    <Grid>
      <GridColumn width={10}>
        <Segment clearing>
          <Form onSubmit={submit}>
            <Form.Input
              placeholder="Name"
              value={selectedRun.name}
              onChange={handleInputChange}
              name="name"
            />
            <Form.Input
              type="datetime-local"
              placeholder="Date"
              value={selectedRun.date}
              onChange={handleInputChange}
              name="date"
            />
            <Form.Input
              placeholder="Distance"
              value={selectedRun.distance}
              onChange={handleInputChange}
              name="distance"
            />
            <Form.Input
              placeholder="Time"
              value={selectedRun.timeInMS}
              name="time"
              onChange={handleInputChange}
            />
            <Button
              loading={false}
              floated="right"
              positive
              type="submit"
              content="Submit"
            />
          </Form>
        </Segment>
      </GridColumn>
    </Grid>
  );
};

export default connect(mapStateToProps)(RunDetailsForm);
