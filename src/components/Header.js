import React from 'react';
import { View, Image, Text } from 'react-native';

export default function Header() {
  return (
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 400, height: 200, resizeMode: 'contain' }}
      />
    </View>
  );
}
