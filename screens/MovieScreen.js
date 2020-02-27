import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import Loader from "../components/Loader";
import { movies } from "../api";

const MovieScreen = ({ navigation }) => {
  const [loaded, setLoaded] = useState(false);
  const [upcoming, setUpcoming] = useState({});
  const [popular, setPopular] = useState({});
  const [nowPlaying, setNowPlaying] = useState({});

  useEffect(() => {
    async function getUpcoming() {
      const upcomingRes = await movies.getUpcoming();
      setUpcoming(upcomingRes);
    }
    async function getPopular() {
      const popularRes = await movies.getPopular();
      setPopular(popularRes);
    }
    async function getNowPlaying() {
      const nowPlayingRes = await movies.getNowPlaying();
      setNowPlaying(nowPlayingRes);
    }

    getUpcoming();
    getPopular();
    getNowPlaying();
    console.log(nowPlaying);
    setLoaded(true);
  }, []);

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
