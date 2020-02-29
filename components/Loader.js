import React from "react";
import styled from "styled-components";
import { ActivityIndicator, View } from "react-native";
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";

const Loader = () => (
  <Container>
    <ActivityIndicator color={TINT_COLOR}></ActivityIndicator>
  </Container>
);

const Container = styled(View)`
  flex: 1;
  background-color: ${BG_COLOR};
  justify-content: center;
`;

export default Loader;
