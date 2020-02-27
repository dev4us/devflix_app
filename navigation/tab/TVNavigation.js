import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TVScreen from "../../screens/TVScreen";
import { headerStyles } from "../NavigationConfig";

const TVStack = createStackNavigator();

export const TVStackNavigator = () => (
  <TVStack.Navigator>
    <TVStack.Screen
      name="TV"
      component={TVScreen}
      options={{ ...headerStyles }}
    ></TVStack.Screen>
  </TVStack.Navigator>
);
