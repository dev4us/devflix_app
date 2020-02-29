import * as React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";

import { MovieStackNavigator } from "./tab/MovieNavigation";
import { TVStackNavigator } from "./tab/TVNavigation";
import { SearchStackNavigator } from "./tab/SearchNavigation";

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
        component={MovieStackNavigator}
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
        component={TVStackNavigator}
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
        component={SearchStackNavigator}
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
