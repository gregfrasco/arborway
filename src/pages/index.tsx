import React from 'react';
import {Container} from "@material-ui/core";
import {MainFeatureCard} from "components/main-feature-card/main-feature-card";

const greenline = require('../assets/greenline.jpg');
//const ELineStops = require('../assets/E-Line-Stops.jpg');

export default () => (
  <Container>
    <MainFeatureCard
      image={greenline}
      imageText='Image of a Green line train on Huntington Ave'
    />
  </Container>
);

