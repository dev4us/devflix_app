import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/DetailScreen";
import { NavigationContainer } from "@react-navigation/native";

const stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Tab" component={TabNavigation} />
        <stack.Screen name="Detail" component={DetailScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
