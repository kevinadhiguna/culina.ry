import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsListScreen} from '../screens/ProductsListScreen';

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator mode={'modal'}>
      <MainStack.Screen
        name={'ProductsList'}
        component={ProductsListScreen}
        options={{
          title: 'Culina.ry 🍽️',
        }}
      />
    </MainStack.Navigator>
  );
}
