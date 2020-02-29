import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import { movies } from "../api";
import MovieSlider from "../components/MovieSlider";

const MovieScreen = ({ navigation }) => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function callAPI() {
      let upcomingRes, popularRes, nowPlayingRes;

      try {
        ({
          data: { results: upcomingRes }
        } = await movies.getUpcoming());

        ({
          data: { results: popularRes }
        } = await movies.getPopular());

        ({
          data: { results: nowPlayingRes }
        } = await movies.getNowPlaying());
      } catch (e) {
        console.log(e.message);
      } finally {
        setData({
          upcoming: upcomingRes,
          popular: popularRes,
          nowPlaying: nowPlayingRes
        });
        setLoaded(true);
      }
    }

    callAPI();
  }, []);

  return !loaded ? (
    <Loader />
  ) : (
    <Container>
      <MovieSlider movies={data.nowPlaying}></MovieSlider>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: black;
`;

export default MovieScreen;
