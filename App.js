import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";

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
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
