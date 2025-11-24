import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import TooltipLabel from './Tooltip';

export default function EmotionButton({ emoji, label, selected, onPress }) {
  const isActive = selected;
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: selected ? '#D1F9C4' : '#ededed',
          padding: 20,
          marginHorizontal: 30,
          borderRadius: 100,
          borderWidth: selected ? 3 : 1,
          borderColor: selected ? '#4CAF50' : '#ccc',
        }}
      >
        <Image source={emoji} style={{ width: 60, height: 60 }} />
      </View>
      {isActive && <TooltipLabel label={label} />}
    </TouchableOpacity>
  );
}
