import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function PrimaryButton({ title, onPress, color, textColor }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color || '#0078D4',
        paddingVertical: 18,
        paddingHorizontal: 35,
        borderRadius: 50,
        marginVertical: 10,
        marginHorizontal: 10,
      }}
    >
      <Text
        style={{
          color: textColor || '#333',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: '800',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
