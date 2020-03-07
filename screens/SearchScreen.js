import React, { useState } from "react";
import { TextInput } from "react-native";
import { BG_COLOR } from "../constants/Colors";
import styled from "styled-components";

const SearchScreen = () => {
  const [tvResults, setTvResults] = useState({});
  const [movieResults, setMovieResults] = useState({});
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);

  return (
    <Container>
      <Input
        onChangeText={e => setSearch(e)}
        value={search}
        autoFocus
        returnKeyType={"search"}
      ></Input>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const Input = styled.TextInput``;

export default SearchScreen;
