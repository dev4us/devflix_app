import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import { movies } from "../api";
import MovieSlider from "../components/MovieSlider";
import Section from "../components/Section";
import MovieItem from "../components/MovieItem";

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
      {data.nowPlaying ? <MovieSlider movies={data.nowPlaying} /> : null}
      {data.upcoming ? (
        <Section title="Upcoming Movies">
          {data.upcoming
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
                overview={movie.overview}
              />
            ))}
        </Section>
      ) : null}
      {data.popular ? (
        <Section horizontal={false} title="Popular Movies">
          {data.popular
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                horizontal={true}
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                voteAvg={movie.vote_average}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: black;
`;

export default MovieScreen;
