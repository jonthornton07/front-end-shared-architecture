import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RunList from '../dashboard/RunList';
import RunDetailsForm from '../details/RunDetailsForm';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RunList">
        <Stack.Screen
          name="RunList"
          component={RunList}
          options={{title: 'My Runs'}}
        />
        <Stack.Screen
          name="RunDetailsForm"
          component={RunDetailsForm}
          options={{title: 'Run Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
