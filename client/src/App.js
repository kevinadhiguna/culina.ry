import React, {useState, useCallback} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {MainStackNavigator} from './navigators/MainStackNavigator';

import {AuthContext} from './contexts/AuthContext';
import {UserContext} from './contexts/UserContext';
import {ThemeContext} from './contexts/ThemeContext';

import {lightTheme} from './themes/light';
import {darkTheme} from './themes/dark';

import {useAuth} from './hooks/useAuth';

import {SplashScreen} from './screens/SplashScreen';

const RootStack = createStackNavigator();

export default function () {
  const {auth, state} = useAuth();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchTheme = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  function renderScreens() {
    if (state.loading) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }

    return state.user ? (
      <RootStack.Screen name={'MainStack'}>
        {() => (
          <UserContext.Provider value={state.user}>
            <MainStackNavigator />
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
      <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    );
  }

  return (
    <ThemeContext.Provider value={switchTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthContext.Provider value={auth}>
        <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
          <RootStack.Navigator
            screenOptions={{
              // This will get rid of a title text being rendered on the top of the screen
              headerShown: false,
            }}>
            {renderScreens()}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
