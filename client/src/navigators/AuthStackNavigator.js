import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '../screens/LoginScreen';
import {RegistrationScreen} from '../screens/RegistrationScreen';

// 'AuthStack' contains screens that must be logged-in to view
const AuthStack = createStackNavigator();

// 'LoginStack' was created to not to apply a swipe-up effect when changing page
const LoginStack = createStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      // mode={'modal'} adds a swipe-up effect when changing a screen to another screen
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={'LoginStack'}>
        {() => (
          <LoginStack.Navigator
            mode={'card'}
            screenOptions={{
              headerShown: false,
            }}>
            <LoginStack.Screen name={'Login'} component={LoginScreen} />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
      <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}
