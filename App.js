import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, Button, View, Text} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
  StackActions,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Mechanics from './App/Containers/Mechanics';
import Cards from './App/Containers/Cards';
import CardSearch from './App/Containers/CardSearch';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Mechanics}
          options={{
            title: 'Mechanics',
            headerStyle: {
              backgroundColor: '#73471c',
            },
          }}
        />
        <Stack.Screen
          name="Cards"
          component={Cards}
          options={{
            title: 'Cards',
            headerStyle: {
              backgroundColor: '#73471c',
            },
          }}
        />
        <Stack.Screen
          name="CardSearch"
          component={CardSearch}
          options={{
            title: 'Card Search',
            headerStyle: {
              backgroundColor: '#73471c',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
