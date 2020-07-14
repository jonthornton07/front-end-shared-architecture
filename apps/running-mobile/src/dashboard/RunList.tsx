import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from 'shared-data-layer/dist/index';
import {setSelectedRun} from 'shared-data-layer/dist/runs/actions';
import RunListItem from './RunListItem';
import {useNavigation} from '@react-navigation/native';

const mapStateToProps = (state: AppState) => ({
  runs: state.run.runs,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleStateClick: (id: number) => dispatch(setSelectedRun(id)),
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const RunList = ({runs, handleStateClick}: Props) => {
  const navigation = useNavigation();

  const handleListItemClick = (id: number) => {
    handleStateClick(id);
    navigation.navigate('RunDetailsForm');
  };

  return (
    <FlatList
      style={{backgroundColor: '#fff', flex: 1}}
      data={runs}
      renderItem={(run) => (
        <RunListItem
          key={run.item.id}
          run={run.item}
          onClick={() => handleListItemClick(run.item.id)}
        />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RunList);
