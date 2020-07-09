import React from "react";
import { Run } from "shared-data-layer/dist/runs/types";
import { Item, Button, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RunListItem: React.FC<{ run: Run }> = ({ run }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as="a">{run.name}</Item.Header>
              <Item.Description>Ran on {run.date}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="clock" /> {run.timeInMS}
        <Icon name="marker" /> {run.distance}
      </Segment>
      <Segment secondary>Attendees will go here</Segment>
      <Segment clearing>
        <span>dfasdf</span>
        <Button
          //   as={Link}
          //   to={`/runs/${run.id}`}
          floated="right"
          content="View"
          color="blue"
        />
      </Segment>
    </Segment.Group>
  );
};

export default RunListItem;
