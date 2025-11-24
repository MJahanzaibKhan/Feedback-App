import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import RoundedCard from '../components/RoundedCard';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';

export default function LanguageScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <RoundedCard>
        <Header />

        <Text
          style={{
            fontSize: 28,
            textAlign: 'center',
            marginBottom: 20,
            fontWeight: '800',
          }}
        >
          Select Your Desired Language
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
        >
          <PrimaryButton
            title="Arabic"
            color="#B8FFB2"
            onPress={() => navigation.navigate('Rating')}
          />

          <PrimaryButton
            title="English"
            color="#E0E0E0"
            onPress={() => navigation.navigate('Rating')}
          />
        </View>
      </RoundedCard>
    </ImageBackground>
  );
}
