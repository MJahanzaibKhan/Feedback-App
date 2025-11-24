import React from 'react';
import { TextInput } from 'react-native';
import colors from '../theme/colors';

export default function TextArea({ value, onChangeText }) {
  return (
    <TextInput
      multiline
      value={value}
      onChangeText={onChangeText}
      placeholder="Tell us what went well..."
      style={{
        borderWidth: 3,
        borderColor: colors.green,
        borderRadius: 20,
        padding: 20,
        height: 150,
        fontSize: 18,
        marginTop: 15,
      }}
    />
  );
}
