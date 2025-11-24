import React from 'react';
import { View } from 'react-native';

export default function RoundedCard({ children }) {
  return (
    <View
      style={{
        width: '85%',
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 40,
        borderRadius: 30,
        alignSelf: 'center',
      }}
    >
      {children}
    </View>
  );
}
