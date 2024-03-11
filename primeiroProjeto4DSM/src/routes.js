import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main.js';
import Login from './pages/login.js';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{
          title: 'Login',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
          }
        }} />
        <Stack.Screen name="main" component={Main} options={{
          title: 'GitHub Viewer',
          headerTitleAlign: 'center',
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
