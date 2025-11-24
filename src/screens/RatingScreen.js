import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import RoundedCard from '../components/RoundedCard';
import EmotionButton from '../components/EmotionButton';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../theme/colors';

export default function RatingScreen({ navigation }) {
  const [selected, setSelected] = useState(null);

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
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          How Was Your Experience Today?
        </Text>
        <Text
          style={{
            fontSize: 22,
            marginTop: 10,
            textAlign: 'center',
            marginBottom: 30,
            color: 'gray',
            width: '80%',
            alignSelf: 'center',
          }}
        >
          Your input is valuable in helping us better understand your needs and
          tailor our service accordingly.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-around',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <EmotionButton
            emoji={require('../assets/sad.png')}
            onPress={() => {
              setSelected(1);
            }}
            selected={selected === 1}
            label={'Sad'}
          />
          <EmotionButton
            emoji={require('../assets/happy.png')}
            onPress={() => setSelected(2)}
            selected={selected === 2}
            label={'Happy'}
          />
          <EmotionButton
            emoji={require('../assets/neutral.png')}
            onPress={() => setSelected(3)}
            selected={selected === 3}
            label={'Neutral'}
          />
        </View>
        <View style={{ backgroundColor: 'red', marginTop: 100 }} />
        <PrimaryButton
          color={colors.red}
          textColor={'#fff'}
          title="Continue"
          onPress={() => navigation.navigate('Feedback')}
        />
      </RoundedCard>
    </ImageBackground>
  );
}
