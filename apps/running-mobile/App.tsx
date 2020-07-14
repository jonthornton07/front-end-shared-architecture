import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'shared-data-layer/dist/index';
import {View} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;
