import React, { useState, useEffect } from "react";
import { Text } from "react-native";

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
    <Text>
      {`${posterPhoto} ${backgroundPhoto} ${title}, ${voteAvg}, ${overview}`}
      {JSON.stringify(props)}
    </Text>
  );
};

export default DetailScreen;
