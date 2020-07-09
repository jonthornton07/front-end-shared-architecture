import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {AppState} from 'shared-data-layer/dist/index';

const mapStateToProps = (state: AppState) => ({
  runs: state.run.runs,
});

type Props = ReturnType<typeof mapStateToProps>;

const Landing = ({runs}: Props) => (
  <View style={{flex: 1, backgroundColor: '#ffffff'}}>
    {runs.map((run) => {
      return <Text style={{height: 50, color: '#000000'}}>{run.name}</Text>;
    })}
  </View>
);

export default connect(mapStateToProps)(Landing);
