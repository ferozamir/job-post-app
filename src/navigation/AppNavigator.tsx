import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JobPostScreen from '../screens/JobPostScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={JobPostScreen} options={{ title: 'Post a Job' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
