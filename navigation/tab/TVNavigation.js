import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TVScreen from "../../screens/TVScreen";

const TVStack = createStackNavigator();

export const TVStackNavigator = () => (
  <TVStack.Navigator>
    <TVStack.Screen name="TV" component={TVScreen}></TVStack.Screen>
  </TVStack.Navigator>
);
