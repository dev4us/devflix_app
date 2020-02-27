import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import Loader from "../components/Loader";
import { tv } from "../api";

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

  return !loaded ? <Loader /> : <Text>TV</Text>;
};

export default TVScreen;
