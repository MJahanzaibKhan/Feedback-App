import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

export default function RoundedCard({ children }) {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{
        width: '85%',
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 40,
        borderRadius: 30,
        alignSelf: 'center',
      }}
    >
      {children}
    </KeyboardAvoidingView>
  );
}
