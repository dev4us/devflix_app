import * as React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MovieScreen from "../screens/MovieScreen";
import TVScreen from "../screens/TVScreen";
import SearchScreen from "../screens/SearchScreen";
import { BG_COLOR } from "../constans/Colors";
import TabBarIcon from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: BG_COLOR },
        showLabel: false
      }}
    >
      <Tab.Screen
        name="Movie"
        component={MovieScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={Platform.OS === "ios" ? "ios-film" : "md-film"}
              focused={focused}
            />
          )
        }}
      />
      <Tab.Screen
        name="TV"
        component={TVScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
              focused={focused}
            />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              focused={focused}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
