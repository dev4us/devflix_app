import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MovieScreen from "../screens/MovieScreen";
import TVScreen from "../screens/TVScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MovieScreen" component={MovieScreen} />
        <Tab.Screen name="TVScreen" component={TVScreen} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigation;
