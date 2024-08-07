import './gesture-handler';

import { NavigationContainer } from "@react-navigation/native";

import { StackNavigator } from './navigator/StackNavigator';


// !App name
export const ReactNativeTemplateApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
