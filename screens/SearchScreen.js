import React, { useState } from "react";
import { TextInput } from "react-native";
import { BG_COLOR, GREY_COLOR } from "../constants/Colors";
import Layout from "../constants/Layout";
import styled from "styled-components";

const SearchScreen = () => {
  const [tvResults, setTvResults] = useState({});
  const [movieResults, setMovieResults] = useState({});
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);

  const onSubmitEditing = () => {
    if (search !== "") {
      alert("searching..");
    }
  };
  return (
    <Container>
      <InputContainer>
        <Input
          onChangeText={e => setSearch(e)}
          value={search}
          autoFocus
          returnKeyType="search"
          placeholder="Search movies and tv"
          placeholderTextColor={GREY_COLOR}
          onSubmitEditing={onSubmitEditing}
        ></Input>
      </InputContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;
const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;

const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 1);
  width: ${Layout.width / 1.6}px;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
`;

export default SearchScreen;
