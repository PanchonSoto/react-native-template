import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home/HomeScreen';
import { Screen1 } from '../screens/Screen1/Screen1';
import { Screen2 } from '../screens/Screen2/Screen2';






export type RootStackParams = {
    HomeScreen: undefined;
    Screen1: { id: number };
    Screen2: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}
