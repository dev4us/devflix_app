import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Loader from "../components/Loader";

const MovieScreen = ({ navigation }) => {
  const [loaded, setLoaded] = useState(false);

  return loaded === false ? (
    <Loader />
  ) : (
    <>
      <Text>Movie</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </>
  );
};

export default MovieScreen;
