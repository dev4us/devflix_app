import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieScreen from "../../screens/MovieScreen";
import { headerStyles } from "../NavigationConfig";

const MovieStack = createStackNavigator();

export const MovieStackNavigator = () => (
  <MovieStack.Navigator option>
    <MovieStack.Screen
      name="Movie"
      component={MovieScreen}
      options={{ ...headerStyles }}
    ></MovieStack.Screen>
  </MovieStack.Navigator>
);
