import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";

import Layout from "../constans/Layout";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  background: green;
  height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text``;

const MovieSlider = ({ movies }) => (
  <Swiper
    showsPagination={false}
    autoplay={true}
    style={{ height: SWIPER_HEIGHT }}
  >
    <View>
      <Text>1</Text>
    </View>
    <View>
      <Text>2</Text>
    </View>
    <View>
      <Text>3</Text>
    </View>
  </Swiper>
);

MovieSlider.propTypes = {
  movies: PropTypes.array
};

export default MovieSlider;
