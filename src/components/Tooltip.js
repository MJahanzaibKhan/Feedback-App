import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function TooltipLabel({ label }) {
  if (!label) return null;

  return (
    <View style={styles.wrapper}>
      {/* Triangle */}
      <View style={styles.triangle} />

      {/* Label container */}
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: 300,
    marginTop: 20,
    position: 'absolute',
    bottom: -85, // adjust vertical position under emoji
  },

  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 18,
    borderRightWidth: 18,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.red, // red pointer like design
    marginBottom: -4,
  },

  container: {
    backgroundColor: colors.red,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: colors.red, // darker outline like your screenshot
  },

  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
});
