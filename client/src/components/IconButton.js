import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

export function IconButton({name, style, onPress}) {
  const {colors} = useTheme();

  // return (
  //   <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
  //     <Icon name={name} size={20} color={colors.primary} />
  //   </TouchableOpacity>
  // );

  return (
    <Icon
      name={name}
      size={20}
      color={colors.primary}
      style={[styles.container, style]}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
