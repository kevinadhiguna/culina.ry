import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export function Card({style, children, onPress}) {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
  },
});
