import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {connect, ResolveThunks} from 'react-redux';
import {AppState} from 'shared-data-layer/dist/index';
import {setSelectedRun} from 'shared-data-layer/dist/runs/actions';
import {getRunsAsync} from 'shared-data-layer/dist/runs/thunks/getRunsAsync';
import RunListItem from './RunListItem';
import {useNavigation} from '@react-navigation/native';

const mapStateToProps = (state: AppState) => ({
  runs: state.run.runs,
});

const mapDispatchToProps = {
  getRunsAsync,
  setSelectedRun,
};

type ScreenProps = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps>;

const RunList = ({runs, getRunsAsync, setSelectedRun}: ScreenProps) => {
  const navigation = useNavigation();

  useEffect(() => {
    getRunsAsync();
  }, [getRunsAsync]);

  const handleListItemClick = (id: number) => {
    console.log(id);
    setSelectedRun(id);
    navigation.navigate('RunDetailsForm');
  };

  return (
    <FlatList
      style={{backgroundColor: '#fff', flex: 1}}
      data={runs}
      keyExtractor={(run, index) => `${run.id}`}
      renderItem={(run) => (
        <RunListItem
          run={run.item}
          onClick={() => handleListItemClick(run.item.id)}
        />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RunList);
