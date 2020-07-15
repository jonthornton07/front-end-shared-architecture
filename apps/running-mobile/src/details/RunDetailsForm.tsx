import React from 'react';
import {View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {AppState} from 'shared-data-layer/dist/index';
import {getSelectedRun} from 'shared-data-layer/dist/runs/selectors';
import moment from 'moment';

const mapStateToProps = (state: AppState) => ({
  selectedRun: getSelectedRun(state),
});

type Props = ReturnType<typeof mapStateToProps>;

const RunDetailsForm = ({selectedRun}: Props) => {
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

  const handleInputChange = () => {};

  const submit = () => {};

  if (selectedRun === null) {
    return null;
  }

  return (
    <View style={{backgroundColor: '#fff', flex: 1, padding: 20}}>
      <Input
        placeholder="Name"
        value={selectedRun.name}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Date"
        value={`${moment(selectedRun.date).format('MM/DD/YYYY')}`}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Distance"
        value={`${selectedRun.distance}`}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Time"
        value={`${selectedRun.timeInMS}`}
        onChange={handleInputChange}
      />
      <Button loading={false} raised title="Submit" />
    </View>
  );
};

export default connect(mapStateToProps)(RunDetailsForm);
