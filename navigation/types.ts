// navigation/types.ts

import { StackNavigationProp } from "@react-navigation/native-stack";

// Define your stack navigator types
export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

// Define the navigation prop type for your screen components
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;
export type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Detail"
>;
