import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SermonDetail from "../components/SermonDetail";
import { RootStackParamList } from "./types";
import HomeScreen from "../components/homeScreen";
import AddSermon from "../components/AddSermon";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          contentStyle: { backgroundColor: "#EADDCA" },
        }}
      >
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
        <Stack.Screen
          name="NewSermon"
          component={AddSermon}
          options={{ headerStyle: { backgroundColor: "#C19A6B" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
