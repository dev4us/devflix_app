import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../../screens/SearchScreen";
import { headerStyles } from "../NavigationConfig";

const SearchStack = createStackNavigator();

export const SearchStackNavigator = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{ ...headerStyles }}
    ></SearchStack.Screen>
  </SearchStack.Navigator>
);
