import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SermonDetail from "../components/SermonDetail";
import { RootStackParamList } from "./types";
import HomeScreen from "../components/homeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerStyle: { backgroundColor: "#C19A6B" } }}
        />
        <Stack.Screen
          name="Detail"
          component={SermonDetail}
          options={{ headerStyle: { backgroundColor: "#C19A6B" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
