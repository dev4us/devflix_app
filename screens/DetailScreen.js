import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";
import Layout from "../constants/Layout";
import makePhotoUrl from "../utils/makePhotoUrl";
import MoviePoster from "../components/MoviePoster";

const DetailScreen = props => {
  const [posterPhoto, setPosterPhoto] = useState();
  const [backgroundPhoto, setBackgroundPhoto] = useState();
  const [title, setTitle] = useState();
  const [voteAvg, setVoteAvg] = useState();
  const [overview, setOverview] = useState();

  useEffect(() => {
    const params = props.route.params;

    setPosterPhoto(params.posterPhoto);
    setBackgroundPhoto(params.backgroundPhoto);
    setTitle(params.title);
    setVoteAvg(params.voteAvg);
    setOverview(params.overview);
  }, []);

  return (
    <Container>
      <Header>
        <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
        <Content>
          <MoviePoster path={posterPhoto} />
          <Column>
            <Title>{title}</Title>
          </Column>
        </Content>
      </Header>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const Header = styled.View`
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width}px;
  height: ${Layout.height / 3}px;
  opacity: 0.3;
  position: absolute;
  top: 0;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  padding-horizontal: 30px;
  height: ${Layout.height / 3}px;
`;

const Column = styled.View`
  margin-left: 30px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 14px;
  font-weight: 600;
`;

export default DetailScreen;
