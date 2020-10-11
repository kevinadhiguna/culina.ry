// Important Note :
// 'AuthContainer.js' was created as one single wrapper for both Login and Registration screen
// Hence, you do not have to modify padding and margin one-by-one at each screen.

import React from 'react';
import {View, StyleSheet} from 'react-native';

export function AuthContainer({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    alignItems: 'center',
  },
});
