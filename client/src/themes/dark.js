import {DarkTheme} from '@react-navigation/native';

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000',
    primary: 'orange',
    text: '#fff',
  },
};
