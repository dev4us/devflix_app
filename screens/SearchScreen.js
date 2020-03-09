import React, { useState } from "react";
import { TextInput } from "react-native";
import { BG_COLOR, GREY_COLOR } from "../constants/Colors";
import Layout from "../constants/Layout";
import styled from "styled-components";
import Loader from "../components/Loader";
import Section from "../components/Section";
import MovieItem from "../components/MovieItem";
import { movies, tv } from "../api";

const SearchScreen = () => {
  const [tvResults, setTvResults] = useState({});
  const [movieResults, setMovieResults] = useState({});
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);

  const onSubmitEditing = async () => {
    if (search !== "") {
      setLoaded(false);
      try {
        ({
          data: { results: movieResultsRes }
        } = await movies.searchMovies(search));
        ({
          data: { results: tvResultsRes }
        } = await tv.searchTv(search));
      } catch (e) {
        alert(e.message);
      } finally {
        setLoaded(true);
        setMovieResults(movieResultsRes);
        setTvResults(tvResultsRes);
        console.log(tvResults);
      }
    }
    return;
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
      <SearchResults>
        {!loaded ? (
          <Loader />
        ) : (
          <>
            {movieResults ? (
              movieResults.length > 0 ? (
                <Section title="Movie Results">
                  {movieResults
                    .filter(movie => movie.poster_path !== null)
                    .map(movie => (
                      <MovieItem
                        key={movie.id}
                        id={movie.id}
                        posterPhoto={movie.poster_path}
                        title={movie.title}
                        overview={movie.overview}
                        voteAvg={movie.vote_average}
                      />
                    ))}
                </Section>
              ) : null
            ) : null}
            {!loaded ? (
              tvResults.length > 0 ? (
                <Section title="TV Results">
                  {tvResults
                    .filter(tv => tv.poster_path !== null)
                    .map(tv => (
                      <MovieItem
                        key={tv.id}
                        id={tv.id}
                        posterPhoto={tv.poster_path}
                        title={tv.name}
                        voteAvg={tv.vote_average}
                      />
                    ))}
                </Section>
              ) : null
            ) : null}
          </>
        )}
      </SearchResults>
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

const SearchResults = styled.ScrollView`
  margin-top: 20px;
`;

export default SearchScreen;
