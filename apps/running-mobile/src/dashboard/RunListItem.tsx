import React from 'react';
import {Run} from 'shared-api-models/src/models';
import {ListItem} from 'react-native-elements';
import moment from 'moment';

const RunListItem: React.FC<{run: Run; onClick: () => void}> = ({
  run,
  onClick,
}) => {
  return (
    <ListItem
      key={run.id}
      title={run.name}
      subtitle={`Ran on ${moment(run.date).format('MM/DD/YYYY')}`}
      onPress={onClick}
      bottomDivider
      chevron
    />
  );
};

export default RunListItem;
