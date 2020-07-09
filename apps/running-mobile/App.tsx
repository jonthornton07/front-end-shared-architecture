import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'shared-data-layer/dist/index';
import Landing from './src/landing/landing';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{backgroundColor: '#000000', flex: 1}}>
        <Landing />
      </View>
    </Provider>
  );
};

export default App;
