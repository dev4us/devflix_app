import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import { tv } from "../api";
import MovieItem from "../components/MovieItem";
import Section from "../components/Section";
import { BG_COLOR } from "../constants/Colors";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVScreen = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function callAPI() {
      let topRatedRes, popularRes, airingTodayRes;

      try {
        ({
          data: { results: topRatedRes }
        } = await tv.getAiringThisWeek());

        ({
          data: { results: popularRes }
        } = await tv.getPopular());

        ({
          data: { results: airingTodayRes }
        } = await tv.getAiringToday());
      } catch (e) {
        console.log(e.message);
      } finally {
        setData({
          topRated: topRatedRes,
          popular: popularRes,
          airingToday: airingTodayRes
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
      {data.airingToday ? (
        <Section title="Airing Today">
          {data.airingToday
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
                isMovie={false}
              />
            ))}
        </Section>
      ) : null}
      {data.topRated ? (
        <Section title="Airing this Week">
          {data.topRated
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
                isMovie={false}
              />
            ))}
        </Section>
      ) : null}
      {data.popular ? (
        <Section title="Popular" horizontal={false}>
          {data.popular
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                horizontal={true}
                overview={tv.overview}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
                isMovie={false}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );
};

export default TVScreen;
