import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export function Loading({loading}) {
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={'#000'} />
        <Text style={styles.text}>Please Wait ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '500',
  },
});
