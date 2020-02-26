import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import MainNavigator from "./navigation/MainNavigation";

function App() {
  const [loaded, setLoaded] = useState(false);
  const preLoad = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
    setLoaded(true);
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded === true ? (
    <>
      <MainNavigator />
    </>
  ) : (
    <AppLoading />
  );
}

export default App;
