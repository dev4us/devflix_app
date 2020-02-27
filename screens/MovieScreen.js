import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import Loader from "../components/Loader";
import { movies } from "../api";

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
    <>
      <Text>Movie</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </>
  );
};

export default MovieScreen;
