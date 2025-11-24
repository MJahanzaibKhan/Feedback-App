import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LanguageScreen from '../screens/LanguageScreen';
import RatingScreen from '../screens/RatingScreen';
import FeedbackScreen from '../screens/FeedbackScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Rating" component={RatingScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
