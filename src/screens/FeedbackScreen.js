import React, { useState } from 'react';
import { Text, ImageBackground } from 'react-native';
import RoundedCard from '../components/RoundedCard';
import Header from '../components/Header';
import TextArea from '../components/TextArea';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../theme/colors';

export default function FeedbackScreen() {
  const [text, setText] = useState('');

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <RoundedCard>
        <Header />

        <Text
          style={{
            fontSize: 34,

            marginBottom: 10,
            fontWeight: '800',
          }}
        >
          Thanks! - Glad To Hear That!
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: 'gray',
            marginBottom: 10,
          }}
        >
          What Stood Out For You? (Optional)
        </Text>
        <TextArea value={text} onChangeText={setText} />
        <Text
          style={{
            fontSize: 22,
            color: 'gray',
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Can we share your feedback as a short quote?
        </Text>
        <PrimaryButton title="Submit" color={colors.red} textColor={'#fff'} />
      </RoundedCard>
    </ImageBackground>
  );
}
