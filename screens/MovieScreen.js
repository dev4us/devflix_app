import React from "react";
import { Text, TouchableOpacity } from "react-native";

const MovieScreen = ({ navigation }) => {
  return (
    <>
      <Text>Movie</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </>
  );
};

export default MovieScreen;
