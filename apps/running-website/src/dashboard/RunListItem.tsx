import React from "react";
import { Run } from "shared-api-models/src/models";
import { Item, Button, Segment } from "semantic-ui-react";
import moment from "moment";

const RunListItem: React.FC<{ run: Run; onClick: () => void }> = ({
  run,
  onClick,
}) => {
  return (
    <Segment.Group>
      <Segment clearing>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as="a">{run.name}</Item.Header>
              <Item.Description>
                Ran on {moment(run.date).format("MM/DD/YYYY")}
              </Item.Description>
            </Item.Content>
            <Button
              onClick={onClick}
              floated="right"
              content="View"
              color="blue"
            />
          </Item>
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
};

export default RunListItem;
